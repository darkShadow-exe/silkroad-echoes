import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [activeRoute, setActiveRoute] = useState<'ancient' | 'modern' | 'both'>('both');

  // Ancient Silk Road coordinates
  const ancientRoute = [
    { name: "Chang'an (Xi'an)", coords: [108.9402, 34.3416], description: "Eastern terminus of the Silk Road" },
    { name: "Dunhuang", coords: [94.6619, 40.1424], description: "Gateway to the Taklamakan Desert" },
    { name: "Kashgar", coords: [75.9877, 39.4704], description: "Major trading hub in the Tarim Basin" },
    { name: "Samarkand", coords: [66.9597, 39.6270], description: "Pearl of Central Asia" },
    { name: "Merv", coords: [62.1906, 37.6547], description: "Crossroads of civilizations" },
    { name: "Baghdad", coords: [44.3661, 33.3152], description: "Center of Islamic learning" },
    { name: "Damascus", coords: [36.2765, 33.5138], description: "Gateway to the Mediterranean" },
    { name: "Constantinople", coords: [28.9784, 41.0082], description: "Bridge between Europe and Asia" }
  ];

  // Middleton's pilgrimage route
  const modernRoute = [
    { name: "Ravu", coords: [81.5311, 30.2653], description: "Journey starting point" },
    { name: "Hor", coords: [81.4806, 30.7417], description: "Transit point" },
    { name: "Darchen", coords: [81.4897, 30.4714], description: "Base camp for Mount Kailash" },
    { name: "Mount Kailash", coords: [81.3119, 31.0669], description: "Sacred mountain circumambulation" },
    { name: "Tirthapuri", coords: [81.1667, 31.0833], description: "Hot springs pilgrimage site" }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) {
      console.log('Map container or token missing');
      return;
    }

    try {
      mapboxgl.accessToken = mapboxToken;
      console.log('Initializing map with token:', mapboxToken.substring(0, 10) + '...');
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12', // Changed to more reliable style
        projection: 'mercator', // Changed from globe to mercator for better compatibility
        zoom: 3,
        center: [75, 35],
        pitch: 0, // Reduced pitch for better visibility
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.scrollZoom.enable(); // Enable scroll zoom for better UX

      // Add error handling
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
      });

      map.current.on('load', () => {
        console.log('Map loaded successfully');
        
        // Add routes after map loads
        setTimeout(() => {
          // Add ancient route
          if (activeRoute === 'ancient' || activeRoute === 'both') {
            addRouteToMap('ancient', ancientRoute, '#D4AF37', 'Ancient Silk Road');
          }

          // Add modern route  
          if (activeRoute === 'modern' || activeRoute === 'both') {
            addRouteToMap('modern', modernRoute, '#8B4513', "Middleton's Journey");
          }
        }, 1000); // Wait for map to fully initialize
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const addRouteToMap = (routeId: string, route: typeof ancientRoute, color: string, title: string) => {
    if (!map.current) return;

    // Add route line
    map.current.addSource(`${routeId}-route`, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: route.map(point => point.coords)
        },
        properties: {}
      }
    });

    map.current.addLayer({
      id: `${routeId}-route-line`,
      type: 'line',
      source: `${routeId}-route`,
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': color,
        'line-width': 4,
        'line-opacity': 0.8
      }
    });

    // Add markers
    route.forEach((point, index) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = color;
      el.style.width = '12px';
      el.style.height = '12px';
      el.style.borderRadius = '50%';
      el.style.border = '2px solid white';
      el.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h3 class="font-semibold text-sm">${point.name}</h3>
            <p class="text-xs text-gray-600">${point.description}</p>
            <p class="text-xs text-blue-600 mt-1">${title}</p>
          </div>
        `);

      new mapboxgl.Marker(el)
        .setLngLat(point.coords as [number, number])
        .setPopup(popup)
        .addTo(map.current!);
    });
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      initializeMap();
    }
  };

  const toggleRoute = (route: 'ancient' | 'modern' | 'both') => {
    setActiveRoute(route);
    if (map.current && !showTokenInput) {
      // Remove existing layers
      ['ancient', 'modern'].forEach(routeId => {
        if (map.current?.getLayer(`${routeId}-route-line`)) {
          map.current.removeLayer(`${routeId}-route-line`);
          map.current.removeSource(`${routeId}-route`);
        }
      });

      // Re-add based on selection
      setTimeout(() => {
        if (route === 'ancient' || route === 'both') {
          addRouteToMap('ancient', ancientRoute, '#D4AF37', 'Ancient Silk Road');
        }
        if (route === 'modern' || route === 'both') {
          addRouteToMap('modern', modernRoute, '#8B4513', "Middleton's Journey");
        }
      }, 100);
    }
  };

  if (showTokenInput) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-card rounded-lg border">
        <h3 className="text-lg font-semibold mb-4">Enter Mapbox Public Token</h3>
        <p className="text-sm text-muted-foreground mb-4 text-center max-w-md">
          To display the interactive map, please enter your Mapbox public token. 
          You can get one at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">mapbox.com</a>
        </p>
        <div className="space-y-4 w-full max-w-sm">
          <div>
            <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSI..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="mt-1"
            />
          </div>
          <Button onClick={handleTokenSubmit} className="w-full">
            Load Interactive Map
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden border">
      {/* Route Toggle Controls */}
      <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={activeRoute === 'ancient' ? 'default' : 'outline'}
            onClick={() => toggleRoute('ancient')}
            className="text-xs"
          >
            Ancient Route
          </Button>
          <Button
            size="sm"
            variant={activeRoute === 'modern' ? 'default' : 'outline'}
            onClick={() => toggleRoute('modern')}
            className="text-xs"
          >
            Modern Route
          </Button>
          <Button
            size="sm"
            variant={activeRoute === 'both' ? 'default' : 'outline'}
            onClick={() => toggleRoute('both')}
            className="text-xs"
          >
            Both
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="font-semibold text-sm mb-2">Legend</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-[#D4AF37] rounded"></div>
            <span className="text-xs">Ancient Silk Road</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-[#8B4513] rounded"></div>
            <span className="text-xs">Middleton's Journey</span>
          </div>
        </div>
      </div>

      <div 
        ref={mapContainer} 
        className="w-full h-full" 
        style={{ minHeight: '600px', position: 'relative' }}
      />
    </div>
  );
};

export default InteractiveMap;
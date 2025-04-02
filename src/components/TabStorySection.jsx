
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data for tabs - you can replace with real data later
const tabsData = [
  { 
    id: 'featured', 
    label: 'Featured', 
    icon: '💛'
  },
  { 
    id: 'women', 
    label: 'Women', 
    icon: '👩'
  },
  { 
    id: 'refugees', 
    label: 'Refugees', 
    icon: '🧳'
  },
  { 
    id: 'climate', 
    label: 'Climate advocates', 
    icon: '🌱'
  },
  { 
    id: 'entrepreneurs', 
    label: 'U.S. entrepreneurs', 
    icon: '🇺🇸'
  }
];

// Sample story cards for each tab - you can replace with real data
const storiesData = {
  featured: [
    {
      id: 1,
      location: 'Togo',
      title: 'Almost funded',
      description: '$425 helps Ama to buy 3 bags of corn, 8 bags of charcoal and condiments.',
      tags: ['Food Production/Sales', 'Food'],
      funded: true,
      image: 'https://images.unsplash.com/photo-1594708767771-a5c9d725724d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      location: 'Philippines',
      title: 'Almost funded',
      description: '$625 helped Angela to buy paint, nails, and plywood.',
      tags: ['Fishing', 'Food'],
      funded: true,
      image: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      location: 'Philippines',
      title: 'Almost funded',
      description: '$525 helped Cresencia to buy food ingredients.',
      tags: ['Food Stall', 'Food'],
      funded: true,
      image: 'https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ],
  women: [
    {
      id: 4,
      location: 'Kenya',
      title: 'Almost funded',
      description: '$350 helps Maria to expand her vegetable stall.',
      tags: ['Food Production/Sales', 'Retail'],
      funded: false,
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ],
  refugees: [
    {
      id: 5,
      location: 'Lebanon',
      title: 'Almost funded',
      description: '$700 helps Fatima to start a small tailoring business.',
      tags: ['Clothing', 'Services'],
      funded: false,
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ],
  climate: [
    {
      id: 6,
      location: 'Costa Rica',
      title: 'Almost funded',
      description: '$550 helps Carlos to buy solar panels for sustainable farming.',
      tags: ['Agriculture', 'Sustainability'],
      funded: false,
      image: 'https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ],
  entrepreneurs: [
    {
      id: 7,
      location: 'United States',
      title: 'Almost funded',
      description: '$800 helps James to purchase equipment for his mobile car wash.',
      tags: ['Services', 'Transportation'],
      funded: false,
      image: 'https://images.unsplash.com/photo-1574013924648-ea6b3285a2a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]
};

const TabStorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-6">
          Almost there! Fund the last few dollars they need
        </h2>
        
        <Tabs defaultValue="featured" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-sm border h-auto p-2 gap-2 flex flex-wrap justify-center">
              {tabsData.map((tab) => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="px-6 py-3 rounded-full data-[state=active]:bg-white data-[state=active]:shadow-md"
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {Object.keys(storiesData).map((tabId) => (
            <TabsContent key={tabId} value={tabId} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {storiesData[tabId].map((story) => (
                  <Card key={story.id} className="overflow-hidden">
                    <div className="relative h-64">
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute left-4 bottom-4 bg-white rounded-full px-3 py-1 flex items-center shadow-sm">
                        <MapPin size={14} className="mr-1" />
                        <span className="text-sm font-medium">{story.location}</span>
                      </div>
                    </div>
                    <CardHeader className="pb-0">
                      <h3 className="text-xl font-semibold text-orange-500">{story.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-medium">{story.description}</p>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="w-full bg-gray-100 p-4 text-center rounded-lg">
                        <p className="font-medium">
                          {story.funded ? "This loan was just funded! 🎉" : "Help fund this loan!"}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TabStorySection;

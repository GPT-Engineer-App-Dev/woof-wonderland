import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paw } from "lucide-react";

const dogBreeds = [
  {
    name: "Labrador Retriever",
    description: "Friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.",
    funFact: "Labradors have a water-resistant coat and webbed toes, making them excellent swimmers.",
  },
  {
    name: "German Shepherd",
    description: "Smart, confident, courageous, and steady; a true dog lover's dog. German Shepherds can be as gentle as a lamb with family and as fearsome as a wolf to protect their loved ones.",
    funFact: "German Shepherds were originally bred to herd sheep and their name literally means 'German Sheepherder'.",
  },
  {
    name: "Golden Retriever",
    description: "Intelligent, friendly, and devoted. Golden Retrievers are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue.",
    funFact: "The Golden Retriever's coat has two layers, providing warmth in cold weather, cooling in hot weather, and repelling water.",
  },
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Discover Dog Breeds</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogBreeds.map((breed, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>{breed.name}</CardTitle>
              <CardDescription>{breed.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt={breed.name} className="mx-auto object-cover w-full h-48 mb-4 rounded-md" />
              <Button 
                onClick={() => setSelectedBreed(breed)} 
                className="w-full"
              >
                <Paw className="mr-2 h-4 w-4" /> Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedBreed && (
        <div className="mt-8 p-6 bg-secondary rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{selectedBreed.name} - Fun Fact</h2>
          <p>{selectedBreed.funFact}</p>
        </div>
      )}
    </div>
  );
};

export default Index;

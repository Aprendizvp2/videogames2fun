import { useState } from "react";
import Card from "../../components/card/Card";
import appColors from "../../types/appColors";
import Select from "../../components/select/Select";
import { SelectChangeEvent } from "@mui/material";

interface Game {
  id: number;
  title: string;
  platform: "nintendo" | "xbox" | "playstation";
  description: string;
  price: string;
  imageUrl: string;
}

export default function Games() {
  const [platformFilter, setPlatformFilter] = useState<string>("all");

  const handlePlatformFilterChange = (event: SelectChangeEvent<string>) => {
    setPlatformFilter(event.target.value);
  };

  const games: Game[] = [
    {
      id: 1,
      title: "FC 24",
      platform: "playstation",
      price: "$59.99",
      description: "El mejor juego de fútbol para PlayStation",
      imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/10/ea-sports-fc-24-3206438.jpg?tf=3840x"
    },
    {
      id: 2,
      title: "Mario Kart 8",
      platform: "nintendo",
      description: "Diversión asegurada con Mario y amigos",
      price: "$49.99",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyE6bmhH8uUpiNr529PRXHPxdJDyFFjHgrg&s"
    },
    {
      id: 3,
      title: "Halo Infinite",
      platform: "xbox",
      description: "La última entrega de la saga Halo",
      price: "$59.99",
      imageUrl: "https://sm.ign.com/ign_es/screenshot/default/halo-infinite_u38n.jpg"
    },
    {
      id: 4,
      title: "The Legend of Zelda",
      platform: "nintendo",
      description: "Aventura épica en Hyrule",
      price: "$39.99",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRr6d52w_pw4hrgToUqXTuoPdjjsuAVILlw&s"
    },
    {
      id: 5,
      title: "God of War",
      platform: "playstation",
      description: "La épica aventura de Kratos",
      price: "$49.99",
      imageUrl: "https://media.vandal.net/i/1280x720/27407/god-of-war-201842202610_1.jpg"
    },
    {
      id: 6,
      title: "Forza Horizon 5",
      platform: "xbox",
      description: "Carreras en los paisajes mexicanos",
      price: "$59.99",
      imageUrl: "https://assets.xboxservices.com/assets/f8/87/f887dbcc-a72f-49ad-9c52-ba70ba9a83a5.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_Redesign_1083x1222_02.jpg"
    }
  ];

  const platformOptions = [
    { value: "all", label: "Todas las plataformas" },
    { value: "nintendo", label: "Nintendo" },
    { value: "xbox", label: "Xbox" },
    { value: "playstation", label: "PlayStation" },
  ];

  const filteredGames = platformFilter === "all" 
    ? games 
    : games.filter(game => game.platform === platformFilter);

  return (
    <div
      id="games"
      className="flex flex-col justify-center items-start text-white p-4 gap-8 px-8 lg:px-32 py-8 lg:py-12"
      style={{ backgroundColor: appColors.BACKGROUND_SCREEN_COLOR }}
    >
      <p className="text-4xl md:text-5xl font-bold pt-20">See the games</p>
      <div className="w-full md:w-1/3">
        <Select
          value={platformFilter}
          backgroundColor="#fff"
          onChange={handlePlatformFilterChange}
          options={platformOptions}
          name="platformFilter"
          fullWidth
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {filteredGames.map((game) => (
          <Card
            key={game.id}
            imageUrl={game.imageUrl}
            altText={game.title}
            title={game.title}
            imageHeight={240}
            description={game.description}
            platform={game.platform}
            price="$49.99"
            buttonText="Buy now"
            buttonVariant="contained"
            buttonColor={appColors.BACKGROUND_BUTTON_COLOR}
          />
        ))}
      </div>
    </div>
  );
}
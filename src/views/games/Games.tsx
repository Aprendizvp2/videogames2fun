import { useState } from "react";
import Card from "../../components/card/Card";
import appColors from "../../types/appColors";
import Select from "../../components/select/Select";
import { SelectChangeEvent } from "@mui/material";

interface Game {
  id: number;
  title: string;
  platforms: ("nintendo" | "xbox" | "playstation")[]; // Cambiado a array de plataformas
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
      title: "EA Sports FC 24",
      platforms: ["playstation", "xbox", "nintendo"],
      price: "$59.99",
      description: "Nueva era del fútbol con HyperMotionV y jugadores reales",
      imageUrl:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/10/ea-sports-fc-24-3206438.jpg?tf=3840x",
    },
    {
      id: 2,
      title: "Mario Kart 8 Deluxe",
      platforms: ["nintendo"],
      description: "48 pistas + DLCs con tus personajes favoritos de Nintendo",
      price: "$49.99",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcyE6bmhH8uUpiNr529PRXHPxdJDyFFjHgrg&s",
    },
    {
      id: 3,
      title: "Halo 3",
      platforms: ["xbox"],
      description: "Sigue la historia del Jefe Maestro y su lucha contra el Covenant y los Flood en la Tierra y en el Arca",
      price: "$99.99",
      imageUrl:
        "https://sm.ign.com/ign_es/screenshot/default/halo-infinite_u38n.jpg",
    },
    {
      id: 4,
      title: "Zelda: Tears of the Kingdom",
      platforms: ["nintendo"],
      description: "Explora cielos y cavernas con habilidades de creación",
      price: "$39.99",
      imageUrl:
        "https://media.es.wired.com/photos/645d4a69a566376ee967bb98/16:9/w_1920,h_1080,c_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg",
    },
    {
      id: 5,
      title: "God of War: Ragnarök",
      platforms: ["playstation"],
      description: "Kratos y Atreus en la conclusión de la saga nórdica",
      price: "$59.99",
      imageUrl:
        "https://sm.ign.com/ign_es/news/g/god-of-war/god-of-war-ragnarok-developer-strongly-encourages-players-to_psun.jpg",
    },
    {
      id: 6,
      title: "Forza Horizon 5",
      platforms: ["xbox"],
      description: "Carreras en México con 700+ autos",
      price: "$59.99",
      imageUrl:
        "https://assets.xboxservices.com/assets/f8/87/f887dbcc-a72f-49ad-9c52-ba70ba9a83a5.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_Redesign_1083x1222_02.jpg",
    },
    {
      id: 7,
      title: "Cyberpunk 2077: Phantom Liberty",
      platforms: ["playstation", "xbox"],
      description: "DLC de espionaje con Idris Elba",
      price: "$39.99",
      imageUrl:
        "https://i.blogs.es/3abce6/wallpapersden.com_johnny-silverhand-and-male-v-cyberpunk-2077_5120x2880/1366_2000.jpeg",
    },
    {
      id: 8,
      title: "Animal Crossing: New Horizons",
      platforms: ["nintendo"],
      description: "Construye tu isla ideal con amigos",
      price: "$49.99",
      imageUrl: "https://albumizr.com/ia/465476727f4234c4889658c1464e0646.jpg",
    },
    {
      id: 9,
      title: "The Last of Us Part I",
      platforms: ["playstation"],
      description: "Remake con gráficos next-gen del clásico de Naughty Dog",
      price: "$49.99",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/the-last-of-us-parte-1-3-1662110547.jpg?crop=0.8063492063492064xw:1xh;center,top&resize=1200:*",
    },
    {
      id: 10,
      title: "Gears 5: Hivebusters",
      platforms: ["xbox"],
      description: "Expansión con nuevos escenarios volcánicos",
      price: "$39.99",
      imageUrl: "https://i.blogs.es/a2e31c/gears50/1366_2000.jpg",
    },
    {
      id: 11,
      title: "Minecraft Legends",
      platforms: ["playstation", "xbox", "nintendo"],
      description: "Spin-off estratégico con criaturas del Nether",
      price: "$29.99",
      imageUrl:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/07/minecraft-classic-2404703.jpg?tf=3840x",
    },
    {
      id: 12,
      title: "eFootball 2024",
      platforms: ["playstation", "xbox", "nintendo"],
      description: "Fútbol free-to-play con equipos licenciados",
      price: "Gratis",
      imageUrl:
        "https://gaming-cdn.com/images/news/articles/11974/cover/1000x563/el-parche-4-4-0-de-efootball-llega-este-jueves-con-juego-cruzado-y-mas-novedades-cover67fffe352334e.jpg",
    },
    {
      id: 13,
      title: "GTA V: Enhanced Edition",
      platforms: ["playstation", "xbox"],
      description: "Versión mejorada con contenido del Cayo Perico",
      price: "$29.99",
      imageUrl:
        "https://img.asmedia.epimg.net/resizer/v2/TMZFHBMHRJI6NFA4HOVM6HINWY.jpg?auth=21f53482bd7489efa1238e5cc7ea17d21a67ee7a584d2e588b7d1c0bc041a4c2&width=1472&height=828&smart=true",
    },
    {
      id: 14,
      title: "Red Dead Redemption II",
      platforms: ["playstation", "xbox"],
      description: "Aventura western con sistema de honor dinámico",
      price: "$39.99",
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/OVDPJLBXDBFBBKKLIJEKBBDRJ4.jpg",
    },
    {
      id: 15,
      title: "Final Fantasy VII Rebirth",
      platforms: ["playstation"],
      description: "Segunda parte del remake con mundo abierto",
      price: "$69.99",
      imageUrl:
        "https://imgproxy.domestika.org/unsafe/w:1200/rs:fill/plain/src://blog-post-open-graph-covers/000/008/296/8296-original.png?1626094862",
    },
    {
      id: 16,
      title: "Dragon Ball Z: Kakarot",
      platforms: ["playstation", "xbox", "nintendo"],
      description: "Revive la saga Z con DLC de Bardock",
      price: "$49.99",
      imageUrl:
        "https://alfabetajuega.com/hero/2020/01/Dragon-Ball-Z-Kakarot-Son-Goku-y-Son-Gohan.jpg?width=1200",
    },
    {
      id: 17,
      title: "Call of Duty: Modern Warfare III",
      platforms: ["playstation", "xbox"],
      description: "Mapas clásicos remasterizados + zombies",
      price: "$69.99",
      imageUrl:
        "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2519060/ss_fd540e4f18d2fc2cd76d5c87c74a386439f12947.1920x1080.jpg?t=1731633494",
    },
    {
      id: 18,
      title: "UFC 4",
      platforms: ["playstation", "xbox"],
      description: "Combates MMA con grappling mejorado",
      price: "$29.99",
      imageUrl:
        "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21786437/ea_sports_ufc_4_grapple_3840.jpg?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
    },
  ];
  const platformOptions = [
    { value: "all", label: "Todas las plataformas" },
    { value: "nintendo", label: "Nintendo" },
    { value: "xbox", label: "Xbox" },
    { value: "playstation", label: "PlayStation" },
  ];

  const filteredGames =
    platformFilter === "all"
      ? games
      : games.filter((game) =>
          game.platforms.includes(
            platformFilter as "nintendo" | "xbox" | "playstation"
          )
        );

  return (
    <div
      id="games"
      className="flex flex-col justify-center items-start text-white gap-8 px-8 lg:px-32 py-8 lg:py-12"
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
            platform={
              platformFilter === "all"
                ? "default"
                : game.platforms.includes(
                    platformFilter as "nintendo" | "xbox" | "playstation"
                  )
                ? (platformFilter as "nintendo" | "xbox" | "playstation")
                : "default"
            }
            price={game.price}
            buttonText="Buy now"
            buttonVariant="contained"
            buttonColor={appColors.BACKGROUND_BUTTON_COLOR}
          />
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Tabs, Tab, Box, Typography, Chip } from "@mui/material";
import { LocalOffer, AccessTime, Whatshot } from "@mui/icons-material";
import Card from "../../components/card/Card";
import appColors from "../../types/appColors";
import CountdownTimer from "../../components/countdowntimer/CountdownTimer";

interface Deal {
  id: number;
  title: string;
  description: string;
  discount: string;
  originalPrice: string;
  price: string;
  timeLeft: string;
  platform: "playstation" | "xbox" | "nintendo";
  featured: boolean;
  imageUrl: string;
}

export default function Deals() {
  const [activeTab, setActiveTab] = useState(0);

  const deals: Deal[] = [
    {
      id: 1,
      title: "Oferta Relámpago",
      description: "Edición especial con contenido exclusivo",
      discount: "50%",
      originalPrice: "$59.99",
      price: "$29.99",
      timeLeft: "02:45:30",
      platform: "playstation",
      featured: true,
      imageUrl:
        "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/12/27/17036748094372.jpg",
    },
    {
      id: 2,
      title: "Pack Especial",
      description: "Incluye todos los DLCs y contenido adicional",
      discount: "30%",
      originalPrice: "$99.99",
      price: "$69.99",
      timeLeft: "1 día",
      platform: "xbox",
      featured: false,
      imageUrl:
        "https://media.comunidadxbox.com/wp-content/uploads/2020/08/apps.14472.71515928021750574.8c4c1842-afac-4ff5-b02b-236d8012bc23.1a179e83-9461-4e45-9327-a7145472b963-e1598795588930.jpeg",
    },
    {
      id: 3,
      title: "Exclusivo Nintendo",
      description: "Solo disponible para Switch por tiempo limitado",
      discount: "25%",
      originalPrice: "$49.99",
      price: "$37.49",
      timeLeft: "3 días",
      platform: "nintendo",
      featured: true,
      imageUrl:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/ncom/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453",
    },
  ];

  const filteredDeals = deals.filter((deal) => {
    if (activeTab === 0) return true;
    if (activeTab === 1) return deal.timeLeft.includes(":");
    if (activeTab === 2) return deal.featured;
    return true;
  });

  return (
    <div
      className="flex flex-col items-center justify-center px-8 lg:px-32 py-8 lg:py-12"
      id="deals"
    >
      <Typography variant="h4" sx={{ mt: 8, mb: 2, fontWeight: "bold" }}>
        <Whatshot
          fontSize="large"
          color="error"
          sx={{ verticalAlign: "middle", mr: 1 }}
        />
        Ofertas Especiales
      </Typography>

      <Tabs
        value={activeTab}
        onChange={(_, newValue) => setActiveTab(newValue)}
        sx={{ mb: 4 }}
      >
        <Tab label="Todas" icon={<LocalOffer />} />
        <Tab label="Ofertas Flash" icon={<AccessTime />} />
        <Tab label="Exclusivas" icon={<Whatshot />} />
      </Tabs>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {filteredDeals.map((deal) => (
          <div key={deal.id}>
            <Card
              imageUrl={deal.imageUrl}
              altText={deal.title}
              title={deal.title}
              description={
                <>
                  <Chip
                    label={deal.discount}
                    color="success"
                    size="small"
                    sx={{ mb: 1, fontWeight: "bold" }}
                  />
                  <Box>
                    <Typography
                      component="span"
                      sx={{ textDecoration: "line-through", mr: 1 }}
                    >
                      {deal.originalPrice}
                    </Typography>
                    <Typography
                      component="span"
                      color="error"
                      fontWeight="bold"
                    >
                      {deal.price}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    {deal.timeLeft.includes(":") ? (
                      <CountdownTimer
                        initialTime={deal.timeLeft}
                        showIcon={true}
                        variant="caption"
                        sx={{ mt: 1 }}
                      />
                    ) : (
                      <>
                        <AccessTime fontSize="small" sx={{ mr: 0.5 }} />
                        <Typography variant="caption" typography="body2">
                          {deal.timeLeft}
                        </Typography>
                      </>
                    )}
                  </Box>
                </>
              }
              platform={deal.platform}
              buttonText="Comprar Ahora"
              buttonColor={appColors.BUTTON_DEALS_COLOR}
              sx={{
                border: deal.featured
                  ? `2px solid ${appColors.BUTTON_DEALS_COLOR}`
                  : "none",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


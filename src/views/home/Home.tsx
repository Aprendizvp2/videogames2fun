import Button from "../../components/button/Button";

export default function Home() {
  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <img
        className="w-full h-full object-cover brightness-[30%]"
        src="https://images.unsplash.com/photo-1585881728919-5c0ce925ad10?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmV0cm8lMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D"
        alt="Retro gaming background"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 gap-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to VG2F</h1>
        <p className="text-xl md:text-2xl max-w-2xl">
          The best store that sells games for different platforms.
        </p>
        <Button size="large">See hot deals</Button>
      </div>
    </div>
  );
}

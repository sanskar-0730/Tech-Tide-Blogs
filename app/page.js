import Blog from "@/components/Blog";
import Arattai from "@/public/arattai.jpg";
import "./page.css";

export default function Home() {
  return (
    <div className="blogs-container">

      <Blog blog="Arattai-Messenger" src={Arattai} alt="Arattai Messenger" h1="Name is Arattai" />

    </div>
  );
}
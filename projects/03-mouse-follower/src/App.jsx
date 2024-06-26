import { useEffect, useState } from "react";
import "./App.css";

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  //pointerMove useEffect
  useEffect(() => {
    console.log("effect", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    //limpiar la suscripcion del useEffect
    //cuando el componente se desmonta
    //cuando cambian las dependencias, antes de ejecutar el efecto de nuevo
    return () => {  //cleanup method
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  //Change body className useEffect
  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Deactivate " : "Activate "}Mousefollow
      </button>
    </>
  );
};

function App() {
  // const [mounted, setMounted] = useState(true)
  return (
    <main>
      <FollowMouse />
      {/* {mounted && <FollowMouse />}
      <button onClick={()=>setMounted(!mounted)}>Toggle mounted FollowMouse component</button> */}
    </main>
  );
}

export default App;


//useEffect 
// [] => Solo se ejecuta una vez cuando se monta el componente
// [con dependencias] => se ejecuta cuando cambia enabled  y cuando se monta el componente
// undefined => se ejecuta cada vez que se renderiza el componente
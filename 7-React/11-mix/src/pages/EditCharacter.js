import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./EditCharacter.css";

function EditCharacter() {
  const { id } = useParams();
  const char = useFetch("https://rickandmortyapi.com/api/character/" + id);

  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();
  // Poner en use effect para cargar los datos char?.name

  useEffect(() => {
    setName(char?.name);
    setStatus(char?.status);
    setImagePreview(char?.image);
  }, [char]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cuando enviamos ficheros, tenemos que usar un FormData en vez de un JSON.stringify
    const formData = new FormData();
    // Le añadimos cada campo individualmente
    formData.append("name", name);
    formData.append("status", status);
    formData.append("image", image); // Los ficheros son un campo más, sin nada especial

    const res = await fetch("https://rickandmortyapi.com/api/character/" + id, {
      method: "PUT",
      // Cuando usamos un formData, no ponemos stringify, y no añadimos la cabecera Content-Type
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setImage(file);
    // converto fichero en ruta con URL.createObjectURL(file)
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <form className="character edit" onSubmit={handleSubmit}>
      <label>
        <span>Nombre:</span>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <span>Estado:</span>
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="" hidden>
            Selecciona...
          </option>
          <option value="Alive">Vivo</option>
          <option value="Dead">Muerto</option>
        </select>
      </label>
      <label>
        <span>Imagen:</span>
        <input
          className="image-picker"
          name="image"
          type="file"
          onChange={handleFile}
        />
        {imagePreview && <img src={imagePreview} alt="preview" />}
      </label>
      <button>Guardar cambios</button>
    </form>
  );
}

export default EditCharacter;

import Slider from "react-slick";
export default function ExerciciosSlider({ fotos }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!fotos?.length) return <p>Sem imagens</p>;

  return (
    <Slider {...settings}>
      {fotos.map((foto) => (
        <div key={foto.id}>
          <img src={foto.url} alt="foto" />
        </div>
      ))}
    </Slider>
  );
}

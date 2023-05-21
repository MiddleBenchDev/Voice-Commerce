import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <div className="tag"></div>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <img style={{ height: "75px", objectFit: "fill", borderRadius: 10 }} src={item.src} alt={item.alt} width="100%" />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default ImageSlider
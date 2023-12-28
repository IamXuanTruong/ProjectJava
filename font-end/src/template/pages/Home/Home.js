import banner from '../../../image/banner.png';
import './Home.css'
import br1 from '../../../image/th1.png';
import br2 from '../../../image/th2.png';
import br3 from '../../../image/th3.png';
import br4 from '../../../image/th4.png';
import br5 from '../../../image/th5.png';
import br6 from '../../../image/th6.png';
import fl from '../../../image/bg_flower.png';
import icon1 from '../../../image/icon1.png';
import icon2 from '../../../image/icon2.png';
import icon3 from '../../../image/icon3.png';
import icon4 from '../../../image/icon4.png';
import { useEffect, useState } from 'react';
import ProductService from '../../../service/ProductService';
import { Link } from 'react-router-dom';


function Home() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        ProductService.getAllProduct()
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    return (
        <>
            <div className='home_page'>
                <div className='banner_full'>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={banner} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={banner} alt="Second slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className='banner_product'>
                    <div className='banner1'>
                        <div className='text_banner'>
                            <h4>Rau quả tươi</h4>
                            <p>Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm
                                bảo chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các
                                mẹ, các chị</p>
                            <button>Xem ngay</button>
                        </div>
                    </div>
                    <div className='banner2'>
                        <div className='text_banner'>
                            <h4>Sinh tố hoa quả</h4>
                            <p>Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm
                                bảo chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các
                                mẹ, các chị</p>
                            <button>Xem ngay</button>
                        </div>
                    </div>
                    <div className='banner3'>
                        <div className='text_banner'>
                            <h4>Thực phẩm tươi</h4>
                            <p>Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm
                                bảo chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các
                                mẹ, các chị</p>
                            <button>Xem ngay</button>
                        </div>
                    </div>
                    <div className='banner4'>
                        <div className='text_banner'>
                            <h4>Hoa quả tươi mát</h4>
                            <p>Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm
                                bảo chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các
                                mẹ, các chị</p>
                            <button>Xem ngay</button>
                        </div>
                    </div>
                </div>
                <div className='title_home'>
                    <h3>
                        VỀ CHÚNG TÔI
                    </h3>
                    <img src={fl}></img>
                    <p>
                        Hiện tại vùng nguyên liệu của chúng tôi có thể cung cấp các thực tập tươi sạch với số lượng lớn
                        vì đang vào vụ mùa thu hoạch nên chúng tôi có thể cung ứng cho tất cả các đối tác xuất khẩu nông
                        sản trên cả nước.
                    </p>
                </div>
                <div className='authen_food'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <img src={icon1}></img>
                            <h6>Trang trại hữu cơ</h6>
                            <p>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</p>
                        </div>
                        <div className='col-lg-3'>
                            <img src={icon2}></img>
                            <h6>Thực phẩm sạch</h6>
                            <p>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</p>
                        </div>
                        <div className='col-lg-3'>
                            <img src={icon3}></img>
                            <h6>An toàn sinh học</h6>
                            <p>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</p>
                        </div>
                        <div className='col-lg-3'>
                            <img src={icon4}></img>
                            <h6>Đa dạng sinh học</h6>
                            <p>Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất</p>
                        </div>
                    </div>
                </div>
                <div className='title_home'>
                    <h3>
                        SẢN PHẨM BÁN CHẠY
                    </h3>
                    <img src={fl}></img>
                </div>
                <div className='product_sale'>
                    <div className='row'>
                        {product.slice(3, 7).map((product) => (
                            <div className='col-lg-3' key={product.product_id}>
                                <div className="card m-2">
                                    <Link to={`/detail/${product.product_id}`} key={product.product_id}>
                                        <img src={product.product_image} className="card-img-top" alt="Product" />
                                    </Link>
                                    <div className="card-body">
                                        <Link to={`/detail/${product.product_id}`} key={product.product_id}>
                                            <h6 className="card-title">{product.product_name}</h6>
                                        </Link>
                                        <h6 className="card-text">{new Intl.NumberFormat('vn-VN').format(product.price)} đ</h6>
                                    </div>
                                    <div className='active_product'>
                                        <div className='active_cart'>
                                            <button >
                                                <i className="fa-solid fa-magnifying-glass"></i>
                                            </button>

                                        </div>
                                        <div className='active_cart'>
                                            <button><i class="fa-solid fa-cart-shopping"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='title_home'>
                    <h3>
                        TOP THƯƠNG HIỆU
                    </h3>
                    <img src={fl}></img>
                </div>
                <div className='brand'>
                    <div className='row'>
                        <div className='col-lg-2'>
                            <img src={br1}></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={br2}></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={br3}></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={br4}></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={br5}></img>
                        </div>
                        <div className='col-lg-2'>
                            <img src={br6}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
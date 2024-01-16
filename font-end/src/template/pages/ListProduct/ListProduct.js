import { useEffect, useState } from 'react';
import './ListProduct.css';
import CategoryService from '../../../service/CategoryService';
import ProductService from '../../../service/ProductService';
import { Link, useParams } from 'react-router-dom';
import ModelAddtoCart from '../../layout/modal/ModelAddtoCart';
function ListProduct() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        ProductService.getAllProduct()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });

        CategoryService.getAllCategory()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const [showPopup, setShowPopup] = useState(false);
    const [productId, setProduct_id] = useState();

    const openModal = (productId) => {
        setShowPopup(true);
        setProduct_id(productId);
    }

    const closeModal = () => {
        setShowPopup(false);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div className="list">
                <div className="title_login pt-5">
                    <h2>Tất cả sản phẩm</h2>
                    <div className='link_cumb'>
                        <a href='#'>Home</a>
                        <p><i className="fa-solid fa-chevron-right"></i></p>
                        <p className='text_title_login'>Sản phẩm</p>
                    </div>
                </div>
                <div className="listproduct">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="soft">
                                <h5>Danh mục sản phẩm</h5>
                                {categories.map((category) => (
                                    <li key={category.category_id}>
                                        <input type='checkbox' id={category.category_name} />
                                        <label htmlFor={category.category_name} className='m-2'>{category.category_name}</label>
                                    </li>
                                ))}
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className='row'>
                                {currentProducts.map((product) => (
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
                                                    <button onClick={() => openModal(product.product_id)}>
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>

                                                </div>
                                                <div className='active_cart'>
                                                    <button><i className="fa-solid fa-cart-shopping"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <ModelAddtoCart showPopup={showPopup} handleClose={closeModal} product_id={productId} />
                                    </div>
                                ))}
                            </div>
                            <div className='pagination'>
                                {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
                                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}
export default ListProduct;
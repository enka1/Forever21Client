import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3 p-0">
                        <div className="font__poppins border-bottom pb-2 d-flex mb-3" data-toggle="collapse" data-target="#moreImages">
                            More Images <span className="ml-auto d-block"><i className="fas fa-xs fa-plus"></i></span>
                        </div>
                        <div class="collapse show" id="moreImages">
                            <div className="row m-0 mb-3">
                                <div className="col-4 px-1 py-1">
                                    <img className="w-100 border" src="https://www.forever21.com/images/1_front_58/00286494-01.jpg" alt="" />
                                </div>
                                <div className="col-4 px-1 py-1">
                                    <img className="w-100 border" src="https://www.forever21.com/images/2_side_58/00286494-01.jpg" alt="" />
                                </div>
                                <div className="col-4 px-1 py-1">
                                    <img className="w-100 border" src="https://www.forever21.com/images/3_back_58/00286494-01.jpg" alt="" />
                                </div>
                                <div className="col-4 px-1 py-1">
                                    <img className="w-100 border" src="https://www.forever21.com/images/4_full_58/00286494-01.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="font__poppins border-bottom pb-2 d-flex mb-3" data-toggle="collapse" data-target="#productInformation">
                            Product Informations <span className="ml-auto d-block"><i className="fas fa-xs fa-plus"></i></span>
                        </div>
                        <div class="collapse show" id="productInformation">
                            <div className="row m-0">
                                <div>
                                    <p className="mb-2 font__poppins font-weight-bold">Details</p>
                                    <p className="small lead">
                                        A corduroy overall mini dress featuring a square neckline,
                                         adjustable shoulder straps that fall into a Y-back, front patch bib pocket, button sides, and back patch pockets.
                            </p>
                                </div>
                                <div>
                                    <p className="mb-2 font__poppins font-weight-bold">Content + Care</p>
                                    <p className="small lead mb-1">
                                        - 100% cotton
                            </p>
                                    <p className="small lead">
                                        - Machine wash cold
                            </p>
                                </div>
                                <div>
                                    <p className="mb-2 font__poppins font-weight-bold">Size + Fit</p>
                                    <p className="small lead">
                                        - Model is 5'9" and wearing a Small
                            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <img className="w-100" src="https://www.forever21.com/images/4_full_750/00286494-01.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <p className="font__raleway h5">Hooded Utility Jacket</p>
                        <p className="font__lato">$29.90</p>
                        <img className="w-100" src="img/fit.png" alt="" />
                        <button className="btn btn-danger btn-block lead font__lato my-3">ADD TO CART</button>
                        <div className="font__poppins border-bottom pb-2 d-flex mb-3" data-toggle="collapse" data-target="#sizeGuide">
                            Size Guide <span className="ml-auto d-block"><i className="fas fa-xs fa-plus"></i></span>
                        </div>
                        <div className="collapse show" id="sizeGuide">
                            <table className="table table-striped small text-center">
                                <thead className="thead-dark ">
                                    <tr>
                                        <th scope="col">Size</th>
                                        <th scope="col">Bust</th>
                                        <th scope="col">Waist</th>
                                        <th scope="col">Hips</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>XS</td>
                                        <td>32</td>
                                        <td>24-25</td>
                                        <td>33-34</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td>34-35</td>
                                        <td>26-27</td>
                                        <td>35-36</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td>36-37</td>
                                        <td>28-29</td>
                                        <td>38-40</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                        <td>38-39</td>
                                        <td>30-31</td>
                                        <td>42-44</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

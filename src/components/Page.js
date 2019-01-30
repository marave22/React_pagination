import React from 'react';
import './Page.css';

class Page extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            images: ['angular2', 'babel', 'CSS', 'gulp', 'HTML', 'nodejs', 'react', 'vue', 'yarn', 'HTML', 'nodejs', 'react', 'vue', 'yarn'],
            currentPage: 1,
            imagePerPage: 3
        }
    }

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        })
        let h = window.location.hash;
        console.log(h)
    };

    render() {
        const { images, currentPage, imagePerPage } = this.state;

        //display images
        const path = '/images/';
        const indexOfLastImage = currentPage * imagePerPage; // 3
        const indexOfFirstImage = indexOfLastImage - imagePerPage; //0
        const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
        const renderImages = currentImages.map((image, index) => {
            return (
                <li
                    key={index}
                    id="img"
                    className="card bg-light text-primary"
                >
                    <img
                        className="img-thumbnail"
                        src={path + image + '.png'} alt="img"
                    />
                    <p className="text-primary p-2">
                        {image.charAt(0).toUpperCase() + image.slice(1)}
                    </p>
                </li>
            )
        });

        //display page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.floor(images.length / imagePerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    className="page-item page-link pages"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <ul
                    id="images"
                    className="images">
                    {renderImages}
                </ul>
                <ul
                    id="page-numbers"
                    className="pagination pageNumber">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}

export default Page;
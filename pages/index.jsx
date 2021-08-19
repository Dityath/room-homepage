import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Component } from 'react';
import Slider from "react-slick";
import styles from '../styles/index.module.scss'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {

    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={styles['main-page']}>
        <nav className={styles['navbar-container']}>
          <svg className={styles['nav-img']} width="90" height="29" viewBox="0 0 62 14" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.988 12.672V5.352C2.988 4.872 3.13 4.424 3.414 4.008C3.70197 3.58832 4.08152 3.23954 4.524 2.988C4.98 2.724 5.464 2.592 5.976 2.592C6.272 2.592 6.594 2.64 6.942 2.736C7.29 2.832 7.596 2.96 7.86 3.12L9.096 0.588C8.7514 0.396046 8.38189 0.252687 7.998 0.162C7.58831 0.0563445 7.16709 0.00192883 6.744 0C5.968 0 5.256 0.186 4.608 0.558C3.96 0.93 3.42 1.468 2.988 2.172V0.384H0V12.672H2.988ZM16.46 13.056C17.788 13.056 18.986 12.78 20.054 12.228C21.0914 11.7039 21.9666 10.9075 22.586 9.924C23.206 8.94 23.516 7.808 23.516 6.528C23.516 5.24 23.206 4.106 22.586 3.126C21.9652 2.14522 21.0902 1.35106 20.054 0.828C18.986 0.276 17.788 0 16.46 0C15.124 0 13.924 0.276 12.86 0.828C11.8254 1.35333 10.9509 2.14699 10.328 3.126C9.704 4.106 9.392 5.24 9.392 6.528C9.392 7.808 9.704 8.94 10.328 9.924C10.9507 10.9069 11.8277 11.703 12.866 12.228C13.934 12.78 15.132 13.056 16.46 13.056V13.056ZM16.46 10.488C15.716 10.488 15.044 10.318 14.444 9.978C13.8533 9.64722 13.3638 9.16186 13.028 8.574C12.684 7.978 12.512 7.296 12.512 6.528C12.512 5.752 12.684 5.066 13.028 4.47C13.3629 3.883 13.8528 3.39938 14.444 3.072C15.044 2.736 15.716 2.568 16.46 2.568C17.212 2.568 17.886 2.736 18.482 3.072C19.0707 3.40075 19.5582 3.88418 19.892 4.47C20.236 5.066 20.408 5.752 20.408 6.528C20.408 7.296 20.236 7.978 19.892 8.574C19.5574 9.16071 19.0701 9.64587 18.482 9.978C17.886 10.318 17.212 10.488 16.46 10.488V10.488ZM32.164 13.056C33.492 13.056 34.69 12.78 35.758 12.228C36.7954 11.7039 37.6706 10.9075 38.29 9.924C38.91 8.94 39.22 7.808 39.22 6.528C39.22 5.24 38.91 4.106 38.29 3.126C37.6692 2.14522 36.7942 1.35106 35.758 0.828C34.69 0.276 33.492 0 32.164 0C30.828 0 29.628 0.276 28.564 0.828C27.5294 1.35333 26.6549 2.14699 26.032 3.126C25.408 4.106 25.096 5.24 25.096 6.528C25.096 7.808 25.408 8.94 26.032 9.924C26.6547 10.9069 27.5317 11.703 28.57 12.228C29.638 12.78 30.836 13.056 32.164 13.056V13.056ZM32.164 10.488C31.42 10.488 30.748 10.318 30.148 9.978C29.5573 9.64722 29.0678 9.16186 28.732 8.574C28.388 7.978 28.216 7.296 28.216 6.528C28.216 5.752 28.388 5.066 28.732 4.47C29.0669 3.883 29.5568 3.39938 30.148 3.072C30.748 2.736 31.42 2.568 32.164 2.568C32.916 2.568 33.59 2.736 34.186 3.072C34.7747 3.40075 35.2622 3.88418 35.596 4.47C35.94 5.066 36.112 5.752 36.112 6.528C36.112 7.296 35.94 7.978 35.596 8.574C35.2614 9.16071 34.7741 9.64587 34.186 9.978C33.59 10.318 32.916 10.488 32.164 10.488ZM44.772 12.672V4.896C44.772 4.456 44.898 4.046 45.15 3.666C45.402 3.286 45.746 2.98 46.182 2.748C46.618 2.516 47.112 2.4 47.664 2.4C48.464 2.4 49.096 2.658 49.56 3.174C50.024 3.69 50.256 4.38 50.256 5.244V12.672H53.244V4.908C53.244 4.468 53.368 4.056 53.616 3.672C53.8711 3.28156 54.2223 2.96336 54.636 2.748C55.068 2.516 55.556 2.4 56.1 2.4C56.9 2.4 57.538 2.666 58.014 3.198C58.49 3.73 58.728 4.452 58.728 5.364V12.672H61.716V4.548C61.716 3.596 61.518 2.782 61.122 2.106C60.7401 1.44352 60.1784 0.902677 59.502 0.546C58.818 0.182 58.036 0 57.156 0C56.228 0 55.412 0.21 54.708 0.63C54.004 1.05 53.376 1.652 52.824 2.436C52.512 1.692 51.978 1.1 51.222 0.66C50.466 0.22 49.604 0 48.636 0C47.884 0 47.194 0.152 46.566 0.456C45.938 0.76 45.34 1.228 44.772 1.86V0.384H41.784V12.672H44.772Z"/>
          </svg>
          <a className={styles['nav-item']}>home</a>
          <a className={styles['nav-item']}>shop</a>
          <a className={styles['nav-item']}>about</a>
          <a className={styles['nav-item']}>contact</a>
        </nav>
  
        <section className={styles['box-second-section']}>
          <div className={styles['second-left']}>
            <Slider ref={c => (this.slider = c)} {...settings}>
              <div>
                <Image src={require("../public/desktop-image-hero-1.jpg")} />
              </div>
              <div>
                <Image src={require("../public/desktop-image-hero-2.jpg")} />
              </div>
              <div>
                <Image src={require("../public/desktop-image-hero-3.jpg")} />
              </div>
            </Slider>
          </div>
          <div className={styles['second-right']}>
            <article className={styles['second-right-article']}>
              <h1 className={styles['second-right-title']}>Discover innovative ways to decorate</h1>
              <p className={styles['second-right-p']}>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
              <a className={styles['second-right-link']}>
                SHOP NOW
                <svg className={styles['second-right-svg']} width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.05 0L39.531 5.527H39.539V5.535L40 6L39.539 6.465V6.528L39.477 6.527L34.049 12L33.387 11.332L38.152 6.527H0V5.527H38.206L33.386 0.667L34.05 0Z"/>
                </svg>
              </a>
            </article>
            <div className={styles['second-button-container']}>
              <button className={styles['second-button']} onClick={this.previous}>
                <svg width="24" height="36" viewBox="0 0 14 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13L13 25" stroke="white"/>
                </svg>
              </button>
              <button className={styles['second-button']} onClick={this.next}>
                <svg width="24" height="36" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0L13 12L1 24" stroke="white"/>
                </svg>
              </button>
            </div>
          </div>
        </section>

        <section className={styles['box-third-section']}>
          <div className={['third-first-image']}>
            <Image src={require("../public/image-about-dark.jpg")} />
          </div>
          <article className={styles['third-article']}>
            <h3 className={styles['third-title']}>ABOUT OUR FURNITURE</h3>
            <p className={styles['third-p']}>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interest and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
          </article>
          <div className={styles['third-second-image']}>
            <Image src={require("../public/image-about-light.jpg")} />
          </div>
        </section>
      </div>
    )
  }
}

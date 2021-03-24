import React from 'react';
// import classes from './simple-slider.module.css';
import './simple-slider.css';

import img1 from '../../assets/img/adidas/Krossovki_Supercourt_belyj_EE6325_01_standard.jpg';
import img2 from '../../assets/img/adidas/Krossovki_Supercourt_belyj_EE6325_02_standard.jpg';
import img3 from '../../assets/img/adidas/Krossovki_Supercourt_belyj_EE6325_04_standard.jpg';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {translate: 0};
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  onToggleClick(e) {
    let currentTranslate = this.state.translate;
    let newTranslate;
    if (e.currentTarget.classList.contains('simple-slider__toggle--right')) {
      newTranslate = currentTranslate - 500;
      if (newTranslate < -1000) newTranslate = 0;
      this.setState({translate: newTranslate});
    } else {
      newTranslate = currentTranslate + 500;
      if (newTranslate > 0) newTranslate = -1000;
      this.setState({translate: newTranslate});
    }
  }

  render() {
    return (
      <div className="simple-slider">
        <div className="simple-slider__slides-container" style={{transform:`translate(${this.state.translate}px)`}}>
          <div className="simple-slider__slide">
            <img className="simple-slider__img" src={img1} alt="Кроссовки"/>
          </div>
          <div className="simple-slider__slide">
            <img className="simple-slider__img" src={img2} alt="Кроссовки"/>
          </div>
          <div className="simple-slider__slide">
            <img className="simple-slider__img" src={img3} alt="Кроссовки"/>
          </div>
        </div>
        <div className="simple-slider__toggle" onClick={this.onToggleClick}></div>
        <div className="simple-slider__toggle simple-slider__toggle--right" onClick={this.onToggleClick}></div>
      </div>
    );
  }
}

export default SimpleSlider;


// import React from 'react';
// // import classes from './simple-slider.module.css';
// import './simple-slider.css';

// import img1 from '../../assets/img/adidas/Krossovki_Supercourt_belyj_EE6325_01_standard.jpg';
// import img2 from '../../assets/img/adidas/Krossovki_Supercourt_belyj_EE6325_02_standard.jpg';
// import img3 from '../../assets/img/adidas/Krossovki_Supercourt_belyj_EE6325_04_standard.jpg';

// class SimpleSlider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {translate: 0};
//     this.onToggleClick = this.onToggleClick.bind(this);
//   }

//   onToggleClick(e) {
//     let currentTranslate = this.state.translate;
//     let newTranslate;
//     if (e.currentTarget.classList.contains('simple-slider__toggle--right')) {
//       newTranslate = currentTranslate - 500;
//       if (newTranslate < -1000) newTranslate = 0;
//       this.setState({translate: newTranslate});
//     } else {
//       newTranslate = currentTranslate + 500;
//       if (newTranslate > 0) newTranslate = -1000;
//       this.setState({translate: newTranslate});
//     }
//   }

//   render() {
//     return (
//       <div className="simple-slider">
//         <div className="simple-slider__slides-container" style={{transform:`translate(${this.state.translate}px)`}}>
//           <div className="simple-slider__slide">
//             <img className="simple-slider__img" src={img1} alt="Кроссовки"/>
//           </div>
//           <div className="simple-slider__slide">
//             <img className="simple-slider__img" src={img2} alt="Кроссовки"/>
//           </div>
//           <div className="simple-slider__slide">
//             <img className="simple-slider__img" src={img3} alt="Кроссовки"/>
//           </div>
//         </div>
//         <div className="simple-slider__toggle" onClick={this.onToggleClick}></div>
//         <div className="simple-slider__toggle simple-slider__toggle--right" onClick={this.onToggleClick}></div>
//       </div>
//     );
//   }
// }
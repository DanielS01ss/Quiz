import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles/styles.css';
import img from './img/gf-img.jpeg';
import heartImg from './img/heart-icon.png';


const App = () =>
{
  const [selectedValue, setSelectedValue] = useState({value:''})
  const [displaySucces1,setDisplaySuccess1] = useState(false);
  const [displayError1, setDisplayError1] = useState(false);

  const [displaySucces2,setDisplaySuccess2] = useState(false);
  const [displayError2, setDisplayError2] = useState(false);

  const [selectedValue2,setSelectedValue2] = useState({value:''});

 const handleClick1 = () =>{
   // console.log(selectedValue.value);
    if(selectedValue.value!='HTML')
    {
        setDisplayError1(true);
        setDisplaySuccess1(false);
    }else{
      setDisplaySuccess1(true);
      setDisplayError1(false);
    }

 }



  const handleClick2 = () =>{
    // console.log(selectedValue.value);
     if(selectedValue2.value!='treescript')
     {
         setDisplayError2(true);
         setDisplaySuccess2(false);
     }else{
       setDisplaySuccess2(true);
       setDisplayError2(false);
     }

  }


  return(
    <div className='main-app'>
      <nav className='navbar'>
      <p className='main-title'>Relu Quiz</p>
      </nav>
      <div className='dedication'>
      <img className='gf-img' src={img}/>
      <p className='dedication-text'> Dedic acest quiz prietenei mele alias viitoare mea doamna Raluca</p>
      <p className='dedication-footer'>-From Sherly with much much much love-</p>
      <img src={heartImg} className="heart-icon"/>
      </div>
      <div className='quiz-section'>
        <div className='question-box'>
          <p className='question'>1.Care este diferenta dintre front-end si back-end?</p>
        </div>

        <div className={'question-box '+(displayError1?' wrong-box ':'') +(displaySucces1?" correct-answer-box ":'')}>
          {displayError1 &&<p className='wrong-answer'>WRONG!!!</p>}
            {displaySucces1 &&<p className='correct-answer'>Correct!!</p>}
          <p className='question'>2.Ce limbaj de markup se foloseste pentru a face pagini web?</p>
          <label class="container">HTML
            <input type="radio" name='radio' value='HTML' onChange={(value)=>{setSelectedValue({value:value.target.defaultValue})}} />
            <span className="checkmark"></span>
            </label>

            <label className="container">CSS
            <input type="radio" name='radio' value='CSS' onChange={(value)=>{setSelectedValue({value:value.target.defaultValue})}}/>
            <span className="checkmark"></span>
            </label>

            <label className="container">JavaScript
            <input type="radio" name='radio' value='JavaScript' onChange={(value)=>{setSelectedValue({value:value.target.defaultValue})}}/>
            <span className="checkmark"></span>
            </label>

            <label className="container">Markdown
            <input type="radio" name='radio' value='Markdown' onChange={(value)=>{setSelectedValue({value:value.target.defaultValue})}}/>
            <span className="checkmark"></span>
            </label>
            <button className='btnSumbit' onClick={handleClick1}>Sumbit!</button>
        </div>

      </div>


      <div className='quiz-section'>


        <div className={'question-box '+(displayError2?' wrong-box ':'') +(displaySucces2?" correct-answer-box ":'')}>
          {displayError2 &&<p className='wrong-answer'>WRONG!!!</p>}
            {displaySucces2 &&<p className='correct-answer'>Correct!!</p>}
          <p className='question'>3.Care dintre urmatoarele nu este un limbaj de programare?</p>
          <label class="container">treescript
            <input type="radio" name='radio' value='treescript' onChange={(value)=>{setSelectedValue2({value:value.target.defaultValue})}} />
            <span className="checkmark"></span>
            </label>

            <label className="container">python
            <input type="radio" name='radio' value='CSS' onChange={(value)=>{setSelectedValue2({value:value.target.defaultValue})}}/>
            <span className="checkmark"></span>
            </label>

            <label className="container">JavaScript
            <input type="radio" name='radio' value='JavaScript' onChange={(value)=>{setSelectedValue2({value:value.target.defaultValue})}}/>
            <span className="checkmark"></span>
            </label>

            <label className="container">c++
            <input type="radio" name='radio' value='Markdown' onChange={(value)=>{setSelectedValue2({value:value.target.defaultValue})}}/>
            <span className="checkmark"></span>
            </label>
            <button className='btnSumbit' onClick={handleClick2}>Sumbit!</button>
        </div>
        <div className='question-box'>
          <p className='question'>4.Cum functioneaza autentificarea (ce am discutat aseara=))?</p>
        </div>
        <div className='question-box'>
          <p className='question'>5.Cum te protejezi in mediul online de hackeri?</p>
        </div>

        <div className='question-box'>
          <p className='question'>BONUS: Ce limbaj(e) de programare imi plac?</p>
        </div>

      </div>


    </div>
  )
}

export default App;

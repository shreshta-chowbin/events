import React, { useRef } from 'react'

function Form() {

    let eng1InputRef= useRef();
    let eng2InputRef= useRef();
    let san1InputRef= useRef();
    let san2InputRef= useRef();
    let mathsA1InputRef= useRef();
    let mathsB1InputRef= useRef();
    let mathsA2InputRef= useRef();
    let mathsB2InputRef= useRef();
    let phy1InputRef= useRef();
    let phy2InputRef= useRef();
    let chem1InputRef =useRef();
    let chem2InputRef= useRef();
    let phyPracInputRef= useRef();
    let chemPracInputRef= useRef();

    let eng1SpanRef= useRef();
    let eng2SpanRef= useRef();
    let san1SpanRef= useRef();
    let san2SpanRef= useRef();
    let mathsA1SpanRef= useRef();
    let mathsB1SpanRef= useRef();
    let mathsA2SpanRef= useRef();
    let mathsB2SpanRef= useRef();
    let phy1SpanRef= useRef();
    let phy2SpanRef= useRef();
    let chem1SpanRef =useRef();
    let chem2SpanRef= useRef();
    let phyPracSpanRef= useRef();
    let chemPracSpanRef= useRef();

    let totMarks1ParaRef= useRef();
    let totMarks2ParaRef= useRef();

    let stuNameInputRef= useRef();
    let parentNameInputRef=useRef();

    let interTotSpanRef=useRef();

    let totResultDiv=useRef();

    let legendSpan1Ref=useRef();
    let legendSpan2Ref=useRef();
    let legendSpanDummyRef= useRef();



    // let eng1Marks=Number(eng1InputRef.current.value);
    // let san1Marks=Number(san1InputRef.current.value);
    // let mathsA1Marks=Number(mathsA1InputRef.current.value);
    // let mathsB1Marks=Number(mathsB1InputRef.current.value);
    // let phy1Marks=Number(phy1InputRef.current.value);
    // let chem1Marks=Number(chem1InputRef.current.value);

    // // let stuName= stuNameInputRef.current.value;

    // let totMarks1= eng1Marks+san1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
    // let perc1= totMarks1/470*100;



    // let eng2Marks=Number(eng2InputRef.current.value);
    // let san2Marks=Number(san2InputRef.current.value);
    // let mathsA2Marks=Number(mathsA2InputRef.current.value);
    // let mathsB2Marks=Number(mathsB2InputRef.current.value);
    // let phy2Marks=Number(phy1InputRef.current.value);
    // let chem2Marks=Number(chem2InputRef.current.value);
    // let phyPracMarks=Number(phyPracInputRef.current.value);
    // let chemPracMarks=Number(chemPracInputRef.current.value);

    // let totMarks2= eng2Marks+san2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
    // let prec2=totMarks2/530*100;

    // let parentName= parentNameInputRef.current.value;


  return (
    <div className='mainDiv'>
      <form className='interForm'>
        <div className='studentDetailsDiv'>
            <fieldset>
                <legend>Student Details</legend>
        <div>
            <label>Student Name</label>
            <input ref={stuNameInputRef}
                 onFocus={() => {
                    console.log("Student Name onFocus");
                    stuNameInputRef.current.style.backgroundColor="lightskyblue";
                }}
                onChange={() => {
                    console.log("Student Name onChange");
                    stuNameInputRef.current.style.fontSize="1rem";
                }}
                onBlur={() => {
                    console.log("Student Name onBlur");
                    stuNameInputRef.current.style.backgroundColor="";
                    stuNameInputRef.current.style.fontSize="";
                    legendSpan1Ref.current.innerHTML= stuNameInputRef.current.value ;
                    legendSpan2Ref.current.innerHTML= stuNameInputRef.current.value;
                    legendSpanDummyRef.current.innerHTML= stuNameInputRef.current.value;
                    legendSpanDummyRef.current.style.visibility="hidden";
                    legendSpan1Ref.current.style.color="darkorchid";
                    legendSpan2Ref.current.style.color="darkorchid";
                }}
            ></input>
            <span></span>
        </div>
        <div>
            <label>Parent Name</label>
            <input ref={parentNameInputRef}
                 onFocus={() => {
                    console.log("Parent Name onFocus");
                    parentNameInputRef.current.style.backgroundColor="lightskyblue";
                }}
                onChange={() => {
                    console.log("Parent Name onChange");
                    parentNameInputRef.current.style.fontSize="1rem";
                }}
                onBlur={() => {
                    console.log("Parent Name onBlur");
                    parentNameInputRef.current.style.backgroundColor="";
                    parentNameInputRef.current.style.fontSize="";
                }}></input>
            <span></span>
        </div>
        </fieldset>
        </div>
        <div className='subjectsDiv'>
            <fieldset>
                <legend className='legendSpan'><span>Subjects</span><span ref={legendSpanDummyRef}></span></legend>
        <div>
            <p>Part-I</p>
        </div>        
        <div>
            <label>ENGLISH </label>
        </div>
        <div>
        <p>Part-II</p>
        </div>
        <div>
            <label>SANSKRIT</label>
        </div>
        <div>
        <p>Part-III: Optional Subjects</p>
        </div>
        <div>
            <label>MATHEMATICS - A</label>
        </div>
        <div>
            <label>MATHEMATICS - B</label>
        </div>
        <div>
            <label>PHYSICS</label>
        </div>
        <div>
            <label>CHEMISTRY</label>
        </div>
        <div>
            <label>PHYSICS PRACTICAL</label>
        </div>
        <div>
            <label>CHEMISTRY PRACTICAL</label>
        </div>
        <div className='hidden'>
            <button type='button'>CALCULATE</button>
        </div>
        <fieldset className='hidden'>
            <p></p>
        </fieldset>
        </fieldset>
        </div>

        <div className='studentMarksDiv1'>
            <fieldset>
                <legend className='legendSpan'><span ref={legendSpan1Ref} >Student</span><span>'s I YEAR Marks</span></legend>
        <div>
            <p className='hidden'>Part-I</p>
        </div>        
        <div>
            <input type="number" ref={eng1InputRef}
               onFocus={() => {
                console.log("English (I YEAR) onFocus");
                eng1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("English (I YEAR) onChange");
                eng1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("English (I YEAR) onBlur");
                eng1InputRef.current.style.backgroundColor="";
                eng1InputRef.current.style.fontSize="";
                eng1SpanRef.current.innerHTML=eng1InputRef.current.value>=35? "PASS":"FAIL";
                eng1SpanRef.current.style.backgroundColor=eng1InputRef.current.value>=35? "lightgreen":"red";
            }}
            ></input>
            <span ref={eng1SpanRef}></span>
        </div>  
        <div>
        <p className='hidden'>Part-II</p>
        </div>
        <div>
            <input type="number" ref={san1InputRef}
            onFocus={() => {
                console.log("Sanskrit (I YEAR) onFocus");
                san1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Sanskrit (I YEAR) onChange");
                san1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Sanskrit (I YEAR) onBlur");
                san1InputRef.current.style.backgroundColor="";
                san1InputRef.current.style.fontSize="";
                san1SpanRef.current.innerHTML=san1InputRef.current.value>=35? "PASS":"FAIL";
                san1SpanRef.current.style.backgroundColor=san1InputRef.current.value>=35? "lightgreen":"red";
            }}
            ></input>
            <span ref={san1SpanRef}></span>
        </div>
        <div>
        <p className='hidden'>Part-III: Optional Subjects</p>
        </div>
        <div>
            <input type="number" ref={mathsA1InputRef}
               onFocus={() => {
                console.log("Mathematics A (I YEAR) onFocus");
                mathsA1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Mathematics A (I YEAR) onChange");
                mathsA1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Mathematics A (I YEAR) onBlur");
                mathsA1InputRef.current.style.backgroundColor="";
                mathsA1InputRef.current.style.fontSize="";
                mathsA1SpanRef.current.innerHTML=mathsA1InputRef.current.value>=26.25? "PASS":"FAIL";
                mathsA1SpanRef.current.style.backgroundColor=mathsA1InputRef.current.value>=26.25? "lightgreen":"red";
            }}
            ></input>
            <span ref={mathsA1SpanRef}></span>
        </div>
        <div>
            <input type="number" ref={mathsB1InputRef}
               onFocus={() => {
                console.log("Mathematics B (I YEAR) onFocus");
                mathsB1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Mathematics B (I YEAR) onChange");
                mathsB1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Mathematics B (I YEAR) onBlur");
                mathsB1InputRef.current.style.backgroundColor="";
                mathsB1InputRef.current.style.fontSize="";
                mathsB1SpanRef.current.innerHTML=mathsB1InputRef.current.value>=26.25? "PASS":"FAIL";
                mathsB1SpanRef.current.style.backgroundColor=mathsB1InputRef.current.value>=26.25? "lightgreen":"red";
            }}
            ></input>
            <span ref={mathsB1SpanRef}></span>
        </div>
        <div>
            <input type="number" ref={phy1InputRef}
               onFocus={() => {
                console.log("Physics (I YEAR) onFocus");
                phy1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Physics (I YEAR) onChange");
                phy1InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("Physics (I YEAR) onBlur");
                phy1InputRef.current.style.backgroundColor="";
                phy1InputRef.current.style.fontSize="";
                phy1SpanRef.current.innerHTML=phy1InputRef.current.value>=21? "PASS":"FAIL";
                phy1SpanRef.current.style.backgroundColor=phy1InputRef.current.value>=21? "lightgreen":"red";
            }}
            ></input>
            <span ref={phy1SpanRef}></span>
        </div>
        <div>
            <input type="number" ref={chem1InputRef}
               onFocus={() => {
                console.log("Chemistry (I YEAR) onFocus");
                chem1InputRef.current.style.backgroundColor="lightskyblue";
            }}
            onChange={() => {
                console.log("Chemistry (I YEAR) onChange");
                chem1InputRef.current.style.fontSize="1rem";
                chem1SpanRef.current.innerHTML=chem1InputRef.current.value>=21? "PASS":"FAIL";
                chem1SpanRef.current.style.backgroundColor=chem1InputRef.current.value>=21? "lightgreen":"red";
            }}
            onBlur={() => {
                console.log("Chemistry (I YEAR) onBlur");
                chem1InputRef.current.style.backgroundColor="";
                chem1InputRef.current.style.fontSize="";
            }}
            ></input>
            <span ref={chem1SpanRef}></span>
        </div>
        <div>
            <input className='hidden'></input>
            {/* <span></span> */}
        </div>
        <div>
            <input className='hidden'></input>
            {/* <span></span> */}
        </div>
        <fieldset>
            <legend><div>
            <button type='button' 
            onClick={() => {
                let eng1Marks=Number(eng1InputRef.current.value);
                let san1Marks=Number(san1InputRef.current.value);
                let mathsA1Marks=Number(mathsA1InputRef.current.value);
                let mathsB1Marks=Number(mathsB1InputRef.current.value);
                let phy1Marks=Number(phy1InputRef.current.value);
                let chem1Marks=Number(chem1InputRef.current.value);

                let stuName= stuNameInputRef.current.value;

                let totMarks1= eng1Marks+san1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
                let perc1= totMarks1/470*100;

                totMarks1ParaRef.current.innerHTML =`${stuName} has scored ${totMarks1}/ 470 with ${perc1.toFixed(2)}%`;

            }}
            >I YEAR RESULT</button>
        </div></legend>
            <p ref={totMarks1ParaRef} className='totPara'></p>
        </fieldset>
        </fieldset>
        </div>

        <div className='studentMarksDiv2'>
            <fieldset>
                <legend className='legendSpan'><span ref={legendSpan2Ref} >Student</span><span>'s II YEAR Marks</span></legend>
        <div>
            <p className='hidden'>Part-I</p>
        </div>        
        <div>
            <input type="number" ref={eng2InputRef}
            onFocus={() => {
                console.log("English (II YEAR) onFocus");
                eng2InputRef.current.style.backgroundColor= "lightskyblue";
            }}
            onChange={() => {
                console.log("English (II YEAR) onChange");
                eng2InputRef.current.style.fontSize="1rem";
            }}
            onBlur={() => {
                console.log("English (II YEAR) onBlur");
                eng2InputRef.current.style.backgroundColor="";
                eng2InputRef.current.style.fontSize="";
                eng2SpanRef.current.innerHTML= eng2InputRef.current.value>=35? "PASS":"FAIL";
                eng2SpanRef.current.style.backgroundColor= eng2InputRef.current.value>=35? "lightgreen":"red";
            }}
            ></input>
            <span ref={eng2SpanRef}></span>
        </div>
        <div>
        <p className='hidden'>Part-II</p>
        </div>
        <div>
            <input type="number" ref={san2InputRef}
                     onFocus={() => {
                        console.log("Sanskrit (II YEAR) onFocus");
                        san2InputRef.current.style.backgroundColor= "lightskyblue";
                    }}
                    onChange={() => {
                        console.log("Sanskrit (II YEAR) onChange");
                        san2InputRef.current.style.fontSize="1rem";
                    }}
                    onBlur={() => {
                        console.log("Sanskrit (II YEAR) onBlur");
                        san2InputRef.current.style.backgroundColor="";
                        san2InputRef.current.style.fontSize="";
                        san2SpanRef.current.innerHTML= san2InputRef.current.value>=35? "PASS":"FAIL";
                        san2SpanRef.current.style.backgroundColor= san2InputRef.current.value>=35? "lightgreen":"red";
                    }}
            ></input>
            <span ref={san2SpanRef}></span>
        </div>
        <div>
        <p className='hidden'>Part-III: Optional Subjects</p>
        </div>
        <div>
            <input type="number" ref={mathsA2InputRef}
                     onFocus={() => {
                        console.log("Mathematics A (II YEAR) onFocus");
                        mathsA2InputRef.current.style.backgroundColor= "lightskyblue";
                    }}
                    onChange={() => {
                        console.log("Mathematics A (II YEAR) onChange");
                        mathsA2InputRef.current.style.fontSize="1rem";
                    }}
                    onBlur={() => {
                        console.log("Mathematics A (II YEAR) onBlur");
                        mathsA2InputRef.current.style.backgroundColor="";
                        mathsA2InputRef.current.style.fontSize="";
                        mathsA2SpanRef.current.innerHTML= mathsA2InputRef.current.value>=26.25? "PASS":"FAIL";
                        mathsA2SpanRef.current.style.backgroundColor= mathsA2InputRef.current.value>=26.25? "lightgreen":"red";
                    }}
            ></input>
            <span ref={mathsA2SpanRef}></span>
        </div>
        <div>
            <input type="number" ref={mathsB2InputRef}
                     onFocus={() => {
                        console.log("Mathematics B (II YEAR) onFocus");
                        mathsB2InputRef.current.style.backgroundColor= "lightskyblue";
                    }}
                    onChange={() => {
                        console.log("Mathematics B (II YEAR) onChange");
                        mathsB2InputRef.current.style.fontSize="1rem";
                    }}
                    onBlur={() => {
                        console.log("Mathematics B (II YEAR) onBlur");
                        mathsB2InputRef.current.style.backgroundColor="";
                        mathsB2InputRef.current.style.fontSize="";
                        mathsB2SpanRef.current.innerHTML= mathsB2InputRef.current.value>=26.25? "PASS":"FAIL";
                        mathsB2SpanRef.current.style.backgroundColor= mathsB2InputRef.current.value>=26.25? "lightgreen":"red";
                    }}
            ></input>
            <span ref={mathsB2SpanRef}></span>
        </div>
        <div>
            <input type="number" ref={phy2InputRef}
                     onFocus={() => {
                        console.log("Physics (II YEAR) onFocus");
                        phy2InputRef.current.style.backgroundColor= "lightskyblue";
                    }}
                    onChange={() => {
                        console.log("Physics (II YEAR) onChange");
                        phy2InputRef.current.style.fontSize="1rem";
                    }}
                    onBlur={() => {
                        console.log("Physics (II YEAR) onBlur");
                        phy2InputRef.current.style.backgroundColor="";
                        phy2InputRef.current.style.fontSize="";
                        phy2SpanRef.current.innerHTML= phy2InputRef.current.value>=21? "PASS":"FAIL";
                        phy2SpanRef.current.style.backgroundColor= phy2InputRef.current.value>=21? "lightgreen":"red";
                    }}
            ></input>
            <span ref={phy2SpanRef}></span>
        </div>
        <div>
            <input type="number" ref={chem2InputRef}
                     onFocus={() => {
                        console.log("Chemistry (II YEAR) onFocus");
                        chem2InputRef.current.style.backgroundColor= "lightskyblue";
                    }}
                    onChange={() => {
                        console.log("Chemistry (II YEAR) onChange");
                        chem2InputRef.current.style.fontSize="1rem";
                    }}
                    onBlur={() => {
                        console.log("Chemistry (II YEAR) onBlur");
                        chem2InputRef.current.style.backgroundColor="";
                        chem2InputRef.current.style.fontSize="";
                        chem2SpanRef.current.innerHTML= chem2InputRef.current.value>=21? "PASS":"FAIL";
                        chem2SpanRef.current.style.backgroundColor= chem2InputRef.current.value>=21? "lightgreen":"red";
                    }}
            ></input>
            <span ref={chem2SpanRef}></span>
        </div>
        <div>
            <input type="number" ref={phyPracInputRef}
                     onFocus={() => {
                        console.log("Physics Practical (II YEAR) onFocus");
                        phyPracInputRef.current.style.backgroundColor= "lightskyblue";
                    }}
                    onChange={() => {
                        console.log("Physics Practical (II YEAR) onChange");
                        phyPracInputRef.current.style.fontSize="1rem";
                    }}
                    onBlur={() => {
                        console.log("Physics Practical (II YEAR) onBlur");
                        phyPracInputRef.current.style.backgroundColor="";
                        phyPracInputRef.current.style.fontSize="";
                        phyPracSpanRef.current.innerHTML= phyPracInputRef.current.value>=10.5? "PASS":"FAIL";
                        phyPracSpanRef.current.style.backgroundColor= phyPracInputRef.current.value>=10.5? "lightgreen":"red";
                    }}
            ></input>
            <span ref={phyPracSpanRef}></span>
        </div>
        <div>
            <input type="number" ref={chemPracInputRef}
                     onFocus={() => {
                        console.log("Chemistry Practical (II YEAR) onFocus");
                        chemPracInputRef.current.style.backgroundColor= "lightskyblue";
                    }}
                    onChange={() => {
                        console.log("Chemistry Practical (II YEAR) onChange");
                        chemPracInputRef.current.style.fontSize="1rem";
                        chemPracSpanRef.current.innerHTML= chemPracInputRef.current.value>=10.5? "PASS":"FAIL";
                        chemPracSpanRef.current.style.backgroundColor= chemPracInputRef.current.value>=10.5? "lightgreen":"red";
                    }}
                    onBlur={() => {
                        console.log("Chemistry Practical (II YEAR) onBlur");
                        chemPracInputRef.current.style.backgroundColor="";
                        chemPracInputRef.current.style.fontSize="";
                    }}
            ></input>
            <span ref={chemPracSpanRef}></span>
        </div>
        <fieldset>
            <legend><button type='button'
            onClick={() => {
                let eng2Marks=Number(eng2InputRef.current.value);
                let san2Marks=Number(san2InputRef.current.value);
                let mathsA2Marks=Number(mathsA2InputRef.current.value);
                let mathsB2Marks=Number(mathsB2InputRef.current.value);
                let phy2Marks=Number(phy1InputRef.current.value);
                let chem2Marks=Number(chem2InputRef.current.value);
                let phyPracMarks=Number(phyPracInputRef.current.value);
                let chemPracMarks=Number(chemPracInputRef.current.value);

                let totMarks2= eng2Marks+san2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
                let prec2=totMarks2/530*100;

                let stuName= stuNameInputRef.current.value;

                totMarks2ParaRef.current.innerHTML=`${stuName} has scored ${totMarks2}/530 with ${prec2.toFixed(2)}%`;
            }}

            >II YEAR RESULT </button></legend>
            <p ref={totMarks2ParaRef} className='totPara'></p>
        </fieldset>
        </fieldset>
        </div>

        <div className='resultDiv'>
            <fieldset ref={totResultDiv}>
                <legend><button type='button'
                onClick={() => {
                    
                    let eng1Marks=Number(eng1InputRef.current.value);
                    let san1Marks=Number(san1InputRef.current.value);
                    let mathsA1Marks=Number(mathsA1InputRef.current.value);
                    let mathsB1Marks=Number(mathsB1InputRef.current.value);
                    let phy1Marks=Number(phy1InputRef.current.value);
                    let chem1Marks=Number(chem1InputRef.current.value);
                    
                    
                    let totMarks1= eng1Marks+san1Marks+mathsA1Marks+mathsB1Marks+phy1Marks+chem1Marks;
                    let perc1= totMarks1/470*100;
                    
                    
                    let eng2Marks=Number(eng2InputRef.current.value);
                    let san2Marks=Number(san2InputRef.current.value);
                    let mathsA2Marks=Number(mathsA2InputRef.current.value);
                    let mathsB2Marks=Number(mathsB2InputRef.current.value);
                    let phy2Marks=Number(phy1InputRef.current.value);
                    let chem2Marks=Number(chem2InputRef.current.value);
                    let phyPracMarks=Number(phyPracInputRef.current.value);
                    let chemPracMarks=Number(chemPracInputRef.current.value);
                    
                    let totMarks2= eng2Marks+san2Marks+mathsA2Marks+mathsB2Marks+phy2Marks+chem2Marks+phyPracMarks+chemPracMarks;
                    let prec2=totMarks2/530*100;
                    
                    let stuName= stuNameInputRef.current.value;
                    let parentName= parentNameInputRef.current.value;

                    let interTot= totMarks1+totMarks2;
                    let perc12= (perc1+prec2)/2;
                    
                    
                    interTotSpanRef.current.innerHTML= `${stuName} S/O ${parentName} has scored ${interTot}/1000 with ${perc12.toFixed(2)}%`;

                    totResultDiv.current.style.backgroundColor= perc12>=35?"lightgreen":"red";
                    interTotSpanRef.current.style.backgroundColor="white";
                }}
                >TOTAL</button></legend>
            <p ref={interTotSpanRef} className='totPara'></p>
            </fieldset>
        </div>

        <div className='tableForm'>
            <table>
                <caption>Student Should Score 35% In Each Subject To Pass</caption> 
                <thead><tr><th>Subjects</th><th>Max.Marks</th><th>Pass Marks</th></tr></thead>
                <tbody><tr className='tableSubjHeading'><td colSpan={3}>Part-I</td></tr>
                <tr><td>English</td><td>100</td><td>35</td></tr>
                <tr className='tableSubjHeading'><td colSpan={3}>Part-II</td></tr>
                <tr><td>Sanskrit</td><td>100</td><td>35</td></tr>
                <tr className='tableSubjHeading'><td colSpan={3}>Part-III</td></tr>
                <tr><td>Mathematics A</td><td>75</td><td>26.25</td></tr>
                <tr><td>Mathematics B</td><td>75</td><td>26.25</td></tr>
                <tr><td>Physics</td><td>60</td><td>21</td></tr>
                <tr><td>Chemistry</td><td>60</td><td>21</td></tr>
                <tr><td>Physics Practicals</td><td>30</td><td>10.5</td></tr>
                <tr><td>Chemistry Practicals</td><td>30</td><td>10.5</td></tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>

      </form>
    </div>
  )
}

export default Form

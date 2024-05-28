import Desktop from './images/illustration-sign-up-desktop.svg';
import Mobile from './images/illustration-sign-up-mobile.svg';
import Suc from './images/icon-success.svg';
import React, { useState } from 'react';

function Card() {
    const [name, setName] = useState('');

    const validMessage = () => {
        var Error = document.getElementById('email');
        if (!Error.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            setName("Valid email required");
            Error.style.background = 'hsla(4, 100%, 67%, 0.493)';
            return true;
        }
        setName(''); 
        Error.style.background = 'white';
        return true;
        
    };

    const AddHedden = (event) => {
        event.preventDefault();

        var ButtonA = document.getElementById('ButtonA');
        var ButtonB = document.getElementById('ButtonB');
        
        if (!ButtonA.classList.contains('hidden')) {
            ButtonB.classList.remove('hidden');
            ButtonB.classList.add('flex');
            ButtonA.classList.add('hidden');
            ButtonA.classList.remove('cont');
            var mail = document.getElementById('email').value;
            document.getElementById('span').innerHTML = mail;
        } else {
            ButtonB.classList.add('hidden');
            ButtonA.classList.remove('hidden');
            ButtonA.classList.add('cont');
            
        }
    };

    return (
        <div>
            <div className="cont bg-white" id='ButtonA'>
                <div className='grid-child1 p-2'>
                    <img src={Desktop} className='desk' alt="Desktop Illustration" />
                    <img src={Mobile} className='mobile' alt="Mobile Illustration" />
                </div>

                <div className="grid-child2 flex flex-col justify-center gap-6">
                    <h1 className='font-bold text-4xl'>Stay updated!</h1>
                    <p className='font-medium text-gray-800'>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul className='font-medium text-gray-800 pl-6'>
                        <li className='pl-2 pb-2'>Product discovery and building what matters</li>
                        <li className='pl-2 pb-2'>Measuring to ensure updates are a success</li>
                        <li className='pl-2 pb-2'>And much more!</li>
                    </ul>
                    <form className='grid' onSubmit={AddHedden}>
                        <label htmlFor="email" className='mt-1 font-semibold'>Email address <span className='float-right text-red-400'>{name}</span></label>
                        <input type="email" name="Email" id="email" required placeholder="email@company.com" onChange={validMessage} className='rounded-2xl border-solid border-gray-400 border-2 p-3 mb-4' />
                        <input type="submit" value="Subscribe to monthly newsletter" className='text-white mb-8 p-3 font-bold text-lg rounded-2xl bg-[var(--Dark-Slate-Grey)] hover:bg-[var(--Tomato)] mbc' />
                    </form>
                </div>
            </div>
            <div className='hidden flex-col gap-4 p-8 m-8 bg-white rounded-2xl md:max-w-xs' id='ButtonB'>
                <img src={Suc} className="w-20" alt="Success Icon" />
                <h1 className='text-5xl font-bold'>Thanks for subscribing!</h1>
                <p className='font-light text-sm'>A confirmation email has been sent to <span id='span'></span>. Please open it and click the button inside to confirm your subscription.</p>
                <button className='bg-[var(--Dark-Slate-Grey)] text-white px-4 py-3 rounded-2xl' onClick={AddHedden}>Dismiss message</button>
            </div>
        </div>
    );
}

export default Card

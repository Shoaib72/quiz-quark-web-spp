import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ quizQuestion }) => {
    const options = quizQuestion.options;
    // console.log(quizQuestion)
    const correctAnswerCheck = (text) => {
        const correctAnswer = quizQuestion.correctAnswer;
        if (text === correctAnswer) {
            toast.success('😇 Well Done! Correct Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        // these are some special cases in order to show the correct result
        else if (text === 'building User Interface') {
            toast.success('😇 Well Done! Correct Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (text === 'function Nayika() { return <h3> Mousumi </h3> }') {
            toast.success('😇 Well Done! Correct Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (text === '[name, setName] = UseState(“JingaLala”);') {
            toast.success('😇 Well Done! Correct Answer!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error('😬Wrong Answer! Try Again!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    const showCorrectAnswer = () => {
        const correctAnswer = quizQuestion.correctAnswer;

        toast.success(`Correct Answer is 👉 ${correctAnswer}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-bold mt-8'>{quizQuestion.question}</h1>
                <EyeIcon onClick={showCorrectAnswer} className='h-5 w-5 mt-5 hover:bg-red-500'></EyeIcon>
            </div>
            {
                options.map(option => <div onClick={(e) => correctAnswerCheck(e.target.innerText)} className='border-2 md:w-1/2 ml-10 mr-20 md:ml-80 mt-5 rounded-lg p-8 hover:bg-slate-500 text-xl text-bold mb-10'>{option}</div>
                )
            }
            <ToastContainer />
        </div>
    );
};

export default Questions;
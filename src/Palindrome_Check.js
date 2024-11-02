import React, {useRef, useState} from 'react';

const Palindrome = ()=>{
	const rInput = useRef();

	const [input, setInput] = useState('');
	const [isPalindrome, setIsPalindrome] = useState(null);
	const [msg, setMsg] = useState('');
		
	const handleChange = (event)=>{
		setInput(event.target.value);
	}

	const check = (event)=>{
		event.preventDefault();

		if(input === ""){
			alert("Enter text here");
			rInput.current.focus();
			return;
		}

		const cleanedInput = input.replace(/[^a-zA-z0-9]/g, '').toLowerCase();

		const reversedInput = cleanedInput.split('').reverse().join('');

		
		let s = cleanedInput === reversedInput ? "It is palindrome." : "It is not palindrome.";

		setMsg(s);	
	}

	return(
	<>
		<center>
		<h1>Palindrome Checker</h1>
		<form onSubmit = {check}>
			<input type = "text" value={input} onChange ={handleChange} placeholder="Enter text"/><br/><br/>

			<button>Check</button>
		</form>	
		<h2>{msg}</h2>
		</center>
	</>
	)
}

export default Palindrome;
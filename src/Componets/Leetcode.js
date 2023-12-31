import React, { useRef } from 'react'

const Leetcode = (props) => {
    
    let dsaClicked = props.dsaClicked;

    const dsaRef = useRef(null);


    if(dsaClicked===true){
        dsaRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='leetcode-con' ref={dsaRef}>

            <h1>DSA & Problem Solving</h1>

            <div className='dsa-first'>

                <div className='dsa-left'>
                    <div>1. Solved 700+ DSA problems on LeetCode and GeeksforGeeks.
                    </div>
                    <div>
                    2. Emphasized efficiency and optimized code.
                    </div>
                    <div>
                    3. Proficient in fundamental algorithms and data structures.
                    </div>
                    <div>
                    4. Actively engaged in collaborative problem-solving.
                    </div>
                    <div>5. Committed to continuous learning and growth.</div>
                </div>

                <div className='dsa-right'>
                    <div className='leet'><a href='https://leetcode.com/Shubham_Bagul/' target='_blank'>Leetcode Profile</a></div>
                    <div className='gfg'><a href='https://auth.geeksforgeeks.org/user/shubhambagul72/practice' target='_blank'>GFG Profile</a></div>
                </div>

            </div>

        </div>
    )
}

export default Leetcode





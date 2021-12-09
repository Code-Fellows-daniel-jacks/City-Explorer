import React, { Component } from "react";
import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from "react-icons/si";

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <>Author: Daniel Jackson</>
                <div>
                    <a href="https://www.linkedin.com/in/daniel-jacob-jackson/" rel='noreferrer' target="_blank"><SiLinkedin /></a>
                    <a href="https://github.com/daniel-jacks" rel='noreferrer' target="_blank"><SiGithub /></a>
                </div>
            </div>
        )
    }
}
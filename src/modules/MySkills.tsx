import SkillIcon from '../components/SkillIcon';

import skilldata from '../data/Content.json'

const skilllevels = skilldata.pages.myskills.skilllevels
const skills = skilldata.pages.myskills.skills

// Icon imports
import linux_icon from '../assets/icons/linux_icon.png';
import networking_icon from '../assets/icons/network_fundamentals_icon.png'
import aws_icon from '../assets/icons/aws_icon.png'
import azure_icon from '../assets/icons/azure_icon.png'
import js_icon from '../assets/icons/js_icon.png'
import ts_icon from '../assets/icons/ts_icon.png'
import nodejs_icon from '../assets/icons/nodejs_icon.png'
import react_icon from '../assets/icons/react_icon.png'
import python_icon from '../assets/icons/python_icon.png'
import git_icon from '../assets/icons/git_icon.png'
import pentesting_icon from '../assets/icons/pentesting_icon.png'
import live_icon from '../assets/icons/live_icon.png'

const MySkills = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <SkillIcon icon={linux_icon} name={skills[1]} knowledge={skilllevels[3]} />
                <SkillIcon icon={networking_icon} name={skills[2]} knowledge={skilllevels[4]} />
                <SkillIcon icon={aws_icon} name={skills[3]} knowledge={skilllevels[1]} />
                <SkillIcon icon={azure_icon} name={skills[4]} knowledge={skilllevels[1]} />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                <SkillIcon icon={js_icon} name={skills[5]} knowledge={skilllevels[3]} />
                <SkillIcon icon={ts_icon} name={skills[6]} knowledge={skilllevels[2]} />
                <SkillIcon icon={nodejs_icon} name={skills[7]} knowledge={skilllevels[3]} />
                <SkillIcon icon={react_icon} name={skills[8]} knowledge={skilllevels[1]} />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                <SkillIcon icon={python_icon} name={skills[9]} knowledge={skilllevels[1]} />
                <SkillIcon icon={git_icon} name={skills[10]} knowledge={skilllevels[1]} />
                <SkillIcon icon={pentesting_icon} name={skills[11]} knowledge={skilllevels[1]} />
                <SkillIcon icon={live_icon} name={skills[12]} knowledge={skilllevels[2]} />
            </div>
        </>
    );
}

export default MySkills;
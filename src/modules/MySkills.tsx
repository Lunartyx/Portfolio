import SkillIcon from '../components/SkillIcon';

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
                <SkillIcon icon={linux_icon} name="Linux" knowledge="Intermediate" />
                <SkillIcon icon={networking_icon} name="Networking" knowledge="Professional" />
                <SkillIcon icon={aws_icon} name="AWS" knowledge="Basic" />
                <SkillIcon icon={azure_icon} name="Azure" knowledge="Basic" />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                <SkillIcon icon={js_icon} name="JavaScript" knowledge="Intermediate" />
                <SkillIcon icon={ts_icon} name="TypeScript" knowledge="Intermediate" />
                <SkillIcon icon={nodejs_icon} name="NodeJS" knowledge="Intermediate" />
                <SkillIcon icon={react_icon} name="React" knowledge="Basic" />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                <SkillIcon icon={python_icon} name="Python" knowledge="Basic" />
                <SkillIcon icon={git_icon} name="Git" knowledge="Basic" />
                <SkillIcon icon={pentesting_icon} name="Pentesting" knowledge="Basic" />
                <SkillIcon icon={live_icon} name="Music Producing" knowledge="Intermediate" />
            </div>
        </>
    );
}

export default MySkills;

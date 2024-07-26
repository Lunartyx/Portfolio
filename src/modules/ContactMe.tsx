import SkillIcon from '../components/SkillIcon';

import skilldata from '../data/Content.json'

const skilllevels = skilldata.pages.myskills.skilllevels
const skills = skilldata.pages.myskills.skills

// Icon imports
import mail_icon from '../assets/icons/mail_icon.png';
import linkedin_icon from '../assets/icons/linkedin_icon.png'
import discord_icon from '../assets/icons/discord_icon.png'
import instagram_icon from '../assets/icons/instagram_icon.png'


const MySkills = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <SkillIcon icon={mail_icon} name={skills[1]} knowledge={skilllevels[3]} />
                <SkillIcon icon={linkedin_icon} name={skills[2]} knowledge={skilllevels[4]} />
                <SkillIcon icon={discord_icon} name={skills[3]} knowledge={skilllevels[1]} />
                <SkillIcon icon={instagram_icon} name={skills[4]} knowledge={skilllevels[1]} />
            </div>
        </>
    );
}

export default MySkills;
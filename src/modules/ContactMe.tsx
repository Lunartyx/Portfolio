import SkillIcon from '../components/SkillIcon';

import skilldata from '../data/Content.json'

const contact_info = skilldata.pages.contact


// Icon imports
import mail_icon from '../assets/icons/mail_icon.png'
import linkedin_icon from '../assets/icons/linkedin_icon.png'
import discord_icon from '../assets/icons/discord_icon.png'
import instagram_icon from '../assets/icons/instagram_icon.png'
import github_icon from '../assets/icons/github_icon.png'

const MySkills = () => {
    return (
        <>
            <div className="grid grid-cols-5 gap-3">
                <a href={contact_info[1].link} target="_blank" rel="noopener noreferrer">
                    <SkillIcon icon={mail_icon} name={contact_info[1].name} knowledge={contact_info[1].content} />
                </a>
                <a href={contact_info[2].link} target="_blank" rel="noopener noreferrer">
                    <SkillIcon icon={linkedin_icon} name={contact_info[2].name} knowledge={contact_info[2].content} />
                </a>
                <a href={contact_info[3].link} target="_blank" rel="noopener noreferrer">
                    <SkillIcon icon={discord_icon} name={contact_info[3].name} knowledge={contact_info[3].content} />
                </a>
                <a href={contact_info[4].link} target="_blank" rel="noopener noreferrer">
                    <SkillIcon icon={instagram_icon} name={contact_info[4].name} knowledge={contact_info[4].content} />
                </a>
                <a href={contact_info[5].link} target="_blank" rel="noopener noreferrer">
                    <SkillIcon icon={github_icon} name={contact_info[5].name} knowledge={contact_info[5].content} />
                </a>
            </div>
        </>
    );
}

export default MySkills;
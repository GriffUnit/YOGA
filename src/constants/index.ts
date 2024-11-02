
export const navLinks = [
    {href: '#about', label:'About'},
    {href: '#classes', label:'Classes'},
    {href: '#blog', label:'Blog'},
    {href: '#contact', label:'Contact'},
]

import {BalanceIcon, FlexibilityIcon, HealthyIcon, YogaLineOne, YogaLineTwo, YogaLineThree, YogaLineFour} from '../assets/Icons';
import { ProfileOne, ProfileTwo, ProfileThree, ProfileFour } from '../assets/Profile_pics/Index';
import { positionOne, positionTwo, positionThree,positionFour } from '../assets/Images';

export const symbols = [
    {title: 'Healthy', desc: 'The sky was cloudless and of a deep dark blue spectacle before.', icon: HealthyIcon},
    {title: 'Flexibility', desc: 'Cloudless and of a deep dark blue spectacle before us was indeed sublime.', icon: FlexibilityIcon },
    {title: 'Balance', desc: 'Deep dark blue spectacle before us was indeed sublime sky was cloudless.', icon: BalanceIcon},
]

export const classDetails = [
    {classTitle: 'Vinayasa Yoga', teacherName: 'Lia Castro', cost: '24', ProfilePic: ProfileOne, BackgroundColor: 'bg-light_purple', icon: positionOne, Line: YogaLineOne },
    {classTitle: 'Hatha Yoga', teacherName: 'Jaquon Hart', cost: '18', ProfilePic: ProfileTwo, BackgroundColor: 'bg-sea_blue', icon: positionTwo, Line: YogaLineTwo},
    {classTitle: 'Meditation', teacherName: 'Winny Rearie', cost: '38', ProfilePic: ProfileThree, BackgroundColor: 'bg-peach_yellow', icon: positionThree, Line: YogaLineThree},
    {classTitle: 'Ashtanga Yoga', teacherName: 'Yvonne Knight', cost: '7', ProfilePic: ProfileFour, BackgroundColor: 'bg-light_red', icon: positionFour, Line: YogaLineFour},
]
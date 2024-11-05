
export const navLinks = [
    {href: '#about', label:'About'},
    {href: '#classes', label:'Classes'},
    {href: '#blog', label:'Blog'},
    {href: '#contact', label:'Contact'},
]

import {BalanceIcon, FlexibilityIcon, HealthyIcon, YogaLineOne, YogaLineTwo, YogaLineThree, YogaLineFour} from '../assets/Icons';
import { ProfileOne, ProfileTwo, ProfileThree, ProfileFour } from '../assets/Profile_pics/Index';
import { positionOne, positionTwo, positionThree,positionFour, Video, Video2, Video3, Lia, Jaquon, Winny, Yvonne, TestPicOne, TestPicTwo, BlogPic1, BlogPic2, BlogPic3 } from '../assets/Images';

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

export const trainingDetails = [
    {image: Video, time: '45 min', title: 'Ashtanga Yoga'},
    {image: Video2, time: '30 min', title: 'Hatha Yoga'},
    {image: Video3, time: '30 min', title: 'Vinayasa Yoga'},
]

export const instructorDetails = [
    {image: Lia, name: 'Lia Castro', classType: 'Ashtanga Yoga' },
    {image: Jaquon, name: 'Jaquon Hart', classType: 'Hatha Yoga' },
    {image: Winny, name: 'Winny Rearie', classType: 'Vinayasa Yoga' },
    {image: Yvonne, name: 'Yvonne Knight', classType: 'Meditation' }
]

export const testimonialDetails = [
    {ProfilePicture: TestPicOne, Testimonialname:'Elsi Hansdottir', TestimonialClass: 'Meditation', testimony: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text."},
    {ProfilePicture: TestPicTwo, Testimonialname:'Stephanie Bailey', TestimonialClass: 'Ashtanga Yoga', testimony: "Which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name."},
]

export const blogDetails = [
    {image: BlogPic1, date: '29 Sep 2020', desc:"Far far away, behind the word mountains"},
    {image: BlogPic2, date: '27 Sep 2020', desc:"Countries, there live the blind texts"},
    {image: BlogPic3, date: '25 Sep 2020', desc:"Separated they live in right at the coast"},
]
/**
 * Internal dependencies
 */
import { PersonalInfoListProps } from '@/components/PersonalInfoList/PersonalInfoList';
import { ReactComponent as ShoeIcon } from '@/icons/shoe.svg';
import { ReactComponent as UserIcon } from '@/icons/user.svg';
import { ReactComponent as ArrowIcon } from '@/icons/arrow-circle.svg';

const personalInfo: PersonalInfoListProps['items'] = [
	{
		label: 'Krzysztof Repsch',
		icon: UserIcon,
	},
	{
		label: 'krzys.repsch@gmail.com',
		href: 'mailto:krzys.repsch@gmail.com',
	},
	{
		label: '603 312 504',
		href: 'tel:603-312-504',
		icon: ArrowIcon,
	},
	{
		label: 'Shoe size 45/46',
		icon: ShoeIcon,
	},
];

export default personalInfo;

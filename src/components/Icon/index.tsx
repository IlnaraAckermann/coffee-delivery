import * as IconPosphor from "@phosphor-icons/react";
import type { IconProps as PhosphorIconProps } from "@phosphor-icons/react";
type IconName = keyof typeof IconPosphor;

export interface IconProps extends PhosphorIconProps {
	name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
	const IconComponent = IconPosphor[
		name
	] as React.ComponentType<PhosphorIconProps>;
	return (
		<div>
			<IconComponent {...props} />
		</div>
	);
};

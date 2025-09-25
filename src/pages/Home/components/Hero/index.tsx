import { Flex } from "../../../../components/Flex";
import HeroImage from "../../../../assets/images/Hero-Imagem.png";
import { Text } from "../../../../components/Text";
import { Tag } from "../../../../components/Tag";

export const Hero = () => {
	return (
		<Flex
			as="section"
			gap="md"
			padding="md"
			alignItems="center"
			justifyContent="between"
		>
			<div>
				<Text
					as="h1"
					variant="title-xl"
					className="text-base-title"
				>
					Encontre o café perfeito para qualquer hora do dia
				</Text>
				<Text
					as="p"
					className="text-base-subtitle mt-4"
					variant="text-l"
				>
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
					hora
				</Text>
				<Flex className="mt-16 grid grid-cols-1 gap-4 l:grid-cols-2">
					<Tag
						color="yellow-dark"
						iconProps={{ name: "ShoppingCart" }}
						text="Compra simples e segura"
					/>
					<Tag
						color="base"
						iconProps={{ name: "Package" }}
						text="Embalagem mantém o café intacto"
					/>
					<Tag
						color="yellow"
						iconProps={{ name: "Timer" }}
						text="Entrega rápida e rastreada"
					/>
					<Tag
						color="purple"
						iconProps={{ name: "Coffee" }}
						text="O café chega fresquinho até você"
					/>
				</Flex>
			</div>
			<Flex>
				<img
					src={HeroImage as string}
					alt="Coffee cup"
					className="w-full max-w-sm object-contain"
				/>
			</Flex>
		</Flex>
	);
};

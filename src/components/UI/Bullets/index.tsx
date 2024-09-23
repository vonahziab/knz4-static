type Props = {
	countBullets: number;
	activeBulletId: number;
	setActiveBulletId?: (value: number) => void;
};

const Bullets = ({ countBullets, activeBulletId, setActiveBulletId }: Props) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				gap: 8,
			}}
		>
			{new Array(countBullets).fill(true).map((item, index) => {
				return (
					<div
						onClick={() => setActiveBulletId && setActiveBulletId(index + 1)}
						key={index}
						style={{
							transition: 'all 0.2s ease',
							backgroundColor:
								index + 1 === activeBulletId
									? 'var(--accent_color)'
									: 'var(--bullet_bg_color)',
							width: 8,
							height: 8,
							borderRadius: 4,
							cursor: 'pointer',
						}}
					/>
				);
			})}
		</div>
	);
};

export default Bullets;

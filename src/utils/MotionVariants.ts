export const cardVariants = (index: number) => ({
    hidden: { opacity: 0, y: 20, transition: { delay: index * 0.2, duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.5 } },
});

export const hoverEffect = {
    whileHover: { scale: 1.05 },
};

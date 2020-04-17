type Props = {
    name: string
}

const SectionHeadline = (props: Props) => (
    <h3 className="sticky top-0 px-8 pt-20 pb-6 text-3xl font-extrabold tracking-tight text-red-600 md:text-center bg-carbon-900 leading-8 sm:text-4xl sm:leading-10">
        {props.name}
    </h3>
)

export default SectionHeadline

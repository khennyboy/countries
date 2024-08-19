import HandleFIlter from "./handleFilter";

function ContinentFilter() {
    return (
        <HandleFIlter
            options={[
                'Africa',
                'Americas',
                'Asia',
                'Europe',
                'Oceania'
            ]}
            field='continent'
        />
    );
}

export default ContinentFilter;

import Stitch from '../Stitch/Stitch';

const StitchList = ({ country, stitches }) => {

    return (
        <>
            {stitches.map((stitch) => {
                return (
                    <Stitch 
                        key={stitch.stitch_id}
                        stitch={stitch}
                        country={country}
                    />
                )
            })}
        </>
    )

}

export default StitchList;
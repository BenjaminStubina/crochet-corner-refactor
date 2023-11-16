import Stitch from '../Stitch/Stitch';

const StitchList = ({ country, stitches, setStitches }) => {

    return (
        <>
            {stitches.map((stitch) => {
                return (
                    <Stitch 
                        key={stitch.stitch_id}
                        stitch={stitch}
                        stitches={stitches}
                        country={country}
                        setStitches={setStitches}
                    />
                )
            })}
        </>
    )

}

export default StitchList;
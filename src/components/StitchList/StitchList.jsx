import Stitch from '../Stitch/Stitch';

const StitchList = ({ country, stitches, setStitches, setActiveStitch }) => {

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
                        setActiveStitch={setActiveStitch}
                    />
                )
            })}
        </>
    )

}

export default StitchList;
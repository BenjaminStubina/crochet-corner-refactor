import Stitch from '../Stitch/Stitch';

const StitchList = ({ country, favStitches, list, stitches, setStitches, setActiveStitch }) => {

    if (list === 'fav') {
        return (
            <>
                {favStitches.map((stitch) => {
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
    
    else {
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
}

export default StitchList;
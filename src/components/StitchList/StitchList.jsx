import Stitch from '../Stitch/Stitch';

const StitchList = ({ country, stitches, setRefresh }) => {

    return (
        <>
            {stitches.map((stitch) => {
                return (
                    <Stitch 
                        key={stitch.stitch_id}
                        stitch={stitch}
                        country={country}
                        setRefresh={setRefresh}
                    />
                )
            })}
        </>
    )

}

export default StitchList;
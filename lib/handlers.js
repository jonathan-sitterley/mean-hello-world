exports.getPeaksApi = async (req, res) => {
    const peaks = {
        id:1,
        name:'pikes peak', 
        range: 'front',
        elevation: 14000,
        latitude:'1',
        longitude:'2',
        standard_route:'standard',
        distance:10,
        gain:1000,
        difficulty:'2',
        photo:'foobar',
    };
    res.json(peaks);
    console.log('Serving list of peaks');
}
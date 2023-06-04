exports.getPeaksApi = async (req, res) => {
    const peaks = [{
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
        photo:'foobar'},
        {
        id:1,
        name:'mount evans', 
        range: 'front',
        elevation: 14001,
        latitude:'2',
        longitude:'3',
        standard_route:'standard',
        distance:11,
        gain:2000,
        difficulty:'3',
        photo:'barfoo'}
    ];
    res.json(peaks);
    console.log('Serving list of peaks');
}
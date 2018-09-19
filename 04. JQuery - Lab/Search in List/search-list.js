function search() {
    let search = $('#searchText').val();    

    if (search.trim() !== '') {
        $('#towns li').css('font-weight', '');
        let arr = $(`#towns li:contains(${search})`);
        arr.css('font-weight', 'bold');
        $(`#result`).text(`${arr.length} matches found.`);
    }    
}

    var $results      = $('#results');
    var $choose       = $('#choose');
    var stores        = [];
    var currentStore  = stores[stores.length-1];
    $('.output').hide();
    document.getElementById('add').addEventListener('click', addStore, false);

    function Store(location, hours, low, high, perc, donuts) {
      this.location           = location;
      this.hours              = hours;
      this.low                = low;
      this.high               = high;
      this.perc               = perc;
      this.donuts             = donuts;
      this.total              = 0;
      this.donutsPerhour      = [];
      this.range              = this.high - this.low;
    };

    var donutsSold = function(store){
      for (i=0; i < store.hours; i++) {
        var ranNumber = (Math.floor(Math.random() * store.range)) + store.low;
        var donutsNeeded = Math.ceil(ranNumber * (store.perc/100)) * store.donuts;
        store.total += donutsNeeded;
        store.donutsPerhour.push (donutsNeeded)
      };    
    };

    function addStore() {
      stores.push  (new Store($('#choose').val(),
                              $('#hours').val(), 
                              $('#low').val(),  
                              $('#high').val(), 
                              $('#perc').val(), 
                              $('#donuts').val())); 
      
      donutsSold(stores[stores.length-1]);

      $results.append('                                                  \
          <tr>                                                           \
            <td>' + $choose.val() +'</td>                                \
            <td>' + stores[stores.length-1].donutsPerhour[0] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[1] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[2] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[3] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[4] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[5] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[6] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[7] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[8] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[9] + '</td>    \
            <td>' + stores[stores.length-1].donutsPerhour[10] + '</td>   \
            <td>' + stores[stores.length-1].total +'</td>                \
        </tr>                                                            \
        ');
      document.getElementById('storeData').reset();
      $('.output').show('slow');
    }
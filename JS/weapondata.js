function Weapon(){
  this.name = "",
  this.stock_array = [],
  this.body_array = [],
  this.grip_array = [],
  this.mag_array = [],
  this.frontgrip_array = [],
  this.barrel_array = [],
  this.current_stockID = 0,
  this.current_bodyID = 0,
  this.current_gripID = 0,
  this.current_magID = 0,
  this.current_frontgripID = 0,
  this.current_barrelID = 0
};

var kalash = new Weapon();
kalash.displayName = "Kalash";
kalash.name = "kalash";
kalash.stock_array = ['Wood','Wood_merged','Plastic','Plastic_merged','Rubber','Rubber_merged','Simple_1','Simple_2', 'Simple_3', ''];
kalash.grip_array  = ['Wood', 'Plastic', 'Rubber'];
kalash.body_array  = ['Body'];
kalash.mag_array = ['Normal', 'Extended', 'Small', 'Drum','Straight'];
kalash.frontgrip_array = ['Normal_wood','Normal_plastic','Normal_rubber','Long_wood','Long_plastic','Long_rubber','Short_wood','Short_plastic','Short_rubber', 'Normal_railed'];
kalash.barrel_array = ['Normal','Normal_suppressor','Long','Long_suppressor','Short','Short_suppressor','Suppressed'];

var kolt = new Weapon();
kolt.displayName = "Kolt (placeholder)"
kolt.name = "kolt";
kolt.stock_array = ['Wood_merged','','Plastic','Plastic_merged','Rubber','Rubber_merged','Simple_1','Simple_2', 'Simple_3', ''];
kolt.grip_array  = ['Wood', 'Plastic', 'Rubber'];
kolt.body_array  = ['Body'];
kolt.mag_array = ['Small', 'Extended', 'Small', 'Drum','Straight'];
kolt.frontgrip_array = ['Long_wood','Normal_plastic','Normal_rubber','Long_wood','Long_plastic','Long_rubber','Short_wood','Short_plastic','Short_rubber', 'Normal_railed'];
kolt.barrel_array = ['Normal','Normal_suppressor','Long','Long_suppressor','Short','Short_suppressor','Suppressed'];

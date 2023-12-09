enum Vehicles {
    CAR = "car",
    BUS = "bus",
    TRUCK = "truck",
    TRAILER = "trailer",
    MOTORCYCLE = "motorcycle",
    BICYCLE = "bicycle",
    AIRPLANE = "airplane",
    HELICOPTER = "helicopter"
}

console.log(Vehicles.BICYCLE)

function goByVehicle(vehicle: Vehicles) {
    const vehicleMap = new Map<Vehicles, string>([
        [Vehicles.CAR, "car"],
        [Vehicles.BUS, "bus"],
        [Vehicles.TRUCK, "truck"],
        [Vehicles.TRAILER, "trailer"],
        [Vehicles.MOTORCYCLE, "motorcycle"],
        [Vehicles.BICYCLE, "bicycle"],
        [Vehicles.AIRPLANE, "airplane"],
        [Vehicles.HELICOPTER, "helicopter"],
    ]);

    const vehicleName = vehicleMap.get(vehicle) || "on foot";
    console.log(`go by ${vehicleName}`);
}

goByVehicle(Vehicles.CAR);
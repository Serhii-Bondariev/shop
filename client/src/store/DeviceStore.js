import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Холодильники",
      },
      {
        id: 2,
        name: "Телевизор",
      },
      {
        id: 3,
        name: "Смартфон",
      },
      {
        id: 6,
        name: "Компютери",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "Samsuns",
      },
      {
        id: 2,
        name: "Apple",
      },
      {
        id: 3,
        name: "OnePlus",
      },
      {
        id: 4,
        name: "Xiaomi",
      },
    ];
    this._devices = [
      {
        id: 13,
        name: "14 pro max",
        price: 40000,
        rating: 0,
        img: "3ff90cdc-d9ed-4047-8fb8-a41e67757437.jpg",
        createdAt: "2024-01-11T16:53:48.539Z",
        updatedAt: "2024-01-11T16:53:48.539Z",
        typeId: 3,
        brandId: 2,
      },
      {
        id: 16,
        name: "9pro",
        price: 19000,
        rating: 0,
        img: "867e950a-c4b7-49f6-ae05-80af1ab248e2.jpg",
        createdAt: "2024-01-11T17:30:08.633Z",
        updatedAt: "2024-01-11T17:30:08.633Z",
        typeId: 3,
        brandId: 3,
      },
      {
        id: 17,
        name: "MI_14_ULTRA",
        price: 45000,
        rating: 0,
        img: "214d4cde-242a-4b0b-9c62-a7f666513fc7.jpg",
        createdAt: "2024-01-11T17:31:45.090Z",
        updatedAt: "2024-01-11T17:31:45.090Z",
        typeId: 3,
        brandId: 4,
      },
      {
        id: 18,
        name: "Samsung_s_23_ultra",
        price: 45000,
        rating: 0,
        img: "aa3d34ec-0112-4f02-8956-31c28869627e.jpg",
        createdAt: "2024-01-11T17:32:55.545Z",
        updatedAt: "2024-01-11T17:32:55.545Z",
        typeId: 3,
        brandId: 1,
      },
      {
        id: 19,
        name: "Samsung-RB-36R8837S9-No-Frost-srebrna-355l",
        price: 44500,
        rating: 0,
        img: "15738156-8b06-49b1-881b-f12a88603c09.jpg",
        createdAt: "2024-01-11T17:40:38.207Z",
        updatedAt: "2024-01-11T17:40:38.207Z",
        typeId: 1,
        brandId: 1,
      },
      {
        id: 20,
        name: "xiaomi-mi-tv-5",
        price: 24500,
        rating: 0,
        img: "b43fb478-5b51-4091-bfbd-870738fc50bb.jpg",
        createdAt: "2024-01-11T17:45:36.651Z",
        updatedAt: "2024-01-11T17:45:36.651Z",
        typeId: 2,
        brandId: 4,
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}

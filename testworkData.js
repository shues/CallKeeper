/*
departure       // точка отправления в рамках отрезка маршрута
destination     // точка назначения в рамках отрезка маршрута
seat            // номер места в транспорте. может быть не указан (No seat assignment)
transport_type  // тип транспорта (bus, train, flight, ferry, etc.)
departure_point // дополнительная информация о точке отправления из билетов. Разная для разных типов                            транспорта (gate, platform, pier, etc.)
transport_number // номер транспорта (хз)
baggage          // информация, касающаяся багажа (если она указана)
*/

const testData ='[{"departure":"place_3","destination":"place_4","seat":3,"transport_type":"train","departure_point":"patform 2","transport_number":1,"baggage":"w"},{"departure":"place_5","destination":"place_6","seat":21,"transport_type":"flight","departure_point":"gait 1","transport_number":1,"baggage":"f"},{"departure":"place_2","destination":"place_3","seat":33,"transport_type":"ferry","departure_point":"platform 2","transport_number":1,"baggage":"r"},{"departure":"place_4","destination":"place_5","seat":1,"transport_type":"train","departure_point":"platform 1","transport_number":1,"baggage":""},{"departure":"place_7","destination":"place_8","seat":null,"transport_type":"ferry","departure_point":"platform 3","transport_number":1,"baggage":"h"},{"departure":"place_6","destination":"place_7","seat":4,"transport_type":"flight","departure_point":"gait 3","transport_number":1,"baggage":"g"},{"departure":"place_1","destination":"place_2","seat":null,"transport_type":"bus","departure_point":"platform 1","transport_number":2,"baggage":"e"}]';

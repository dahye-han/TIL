# import travel.thailand
# # import travel.thailand.ThailandPackage() -> 사용 불가
# trip_to = travel.thailand.ThailandPackage()
# trip_to.detail()

# from travel.thailand import ThailandPackage
# trip_to = ThailandPackage()
# trip_to.detail()

# from travel import vietnam
# trip_to = vietnam.VietnamPackage()
# trip_to.detail()

from travel import *
trip_to = thailand.ThailandPackage()
# trip_to = vietnam.VietnamPackage()
trip_to.detail()
//
//  TemperatureConverter.h
//  TemperatureConverterFramework
//
//  Created by Alex on 3/30/15.
//  Copyright (c) 2015 Nuvious. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface TemperatureConverter : NSObject

@property (nonatomic,readonly) NSString *originalValue;
@property (nonatomic,readonly) BOOL originalValueIsFahrenheit;

- (id)initWithFahrenheit:(NSString *)string;
- (id)initWithCelsius:(NSString *)string;
- (NSString *)getFahrenheitValue;
- (NSString *)getCelsiusValue;

+ (NSString *)celsiusToFahrenheit: (NSString *)celsius;
+ (NSString *)fahrenheitToCelsius: (NSString *)fahrenheit;

@end
